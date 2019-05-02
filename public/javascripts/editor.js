var app = new Vue({
  el: '#app',
  data: function () {
    return {
      title: 'Markdown to WeChat',
      aboutOutput: '',
      output: '',
      source: '',
      previewFontSize: '',
      editorThemes: [
        { label: 'base16-light', value: 'base16-light' }, 
        { label: 'duotone-light', value: 'duotone-light'},
        { label: 'monokai', value: 'monokai' }
      ],
      currentEditorTheme: 'base16-light',
      editor: null,
      currentSize: '17px',
      sizeOption: [
        { label: '16px', value: '16px', desc: '默认' },
        { label: '17px', value: '17px', desc: '正常' },
        { label: '18px', value: '18px', desc: '稍大' }
      ],
      currentTheme: 'lupeng',
      themeOption: [
        { label: 'default', value: 'default', author: 'Lyric'},
        { label: 'lupeng', value: 'lupeng', author: '鲁鹏'}
      ],
      aboutDialogVisible: false
    }
  },
  mounted () {
    var self = this
    this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: false,
      lineWrapping: true,
      styleActiveLine: true,
      theme: this.currentEditorTheme,
      mode: 'text/x-markdown',
    });
    this.editor.on("change", function(cm, change) {
      self.refresh()
    })
    this.wxRenderer = new WxRenderer({})
    axios({
      method: 'get',
      url: '/ajax/default?theme=' + self.currentTheme,
    }).then(function(resp){
      self.wxRenderer = new WxRenderer({
        theme: resp.data.theme,
        fonts: self.currentFont,
        size: self.currentSize
      })
      self.editor.setValue(resp.data.defaultMD)
    })
  },
  methods: {
    renderWeChat: function (source) {
      var output = marked(source, { renderer: this.wxRenderer.getRenderer() })
      if (this.wxRenderer.hasFootnotes()) {
        output += this.wxRenderer.buildFootnotes()
      }
      return output
    },
    editorThemeChanged: function (editorTheme) {
      this.editor.setOption('theme', editorTheme)
    },
    fontChanged: function (fonts) {
      this.wxRenderer.setOptions({
        fonts: fonts
      })
      this.refresh()
    },
    sizeChanged: function(size){
      this.previewFontSize = 'font-size:' + size
      this.refresh()
    },
    themeChanged: function(themeName){
      let self = this;
      axios({
        method: 'get',
        url: '/ajax/themes/' + themeName
      }).then(function (resp) {
        self.wxRenderer.setOptions({
          theme: resp.data.theme
        })
        self.refresh()
      })
    },
    refresh: function () {
      this.output = this.renderWeChat(this.editor.getValue())
    },
    copy: function () {
      var clipboardDiv = document.getElementById('output')
      clipboardDiv.focus();
      window.getSelection().removeAllRanges();  
      var range = document.createRange(); 
      range.setStartBefore(clipboardDiv.firstChild);
      range.setEndAfter(clipboardDiv.lastChild);
      window.getSelection().addRange(range);  

      try {
        if (document.execCommand('copy')) {
          this.$message({
            message: '已复制到剪贴板', type: 'success'
          })
        } else {
          this.$message({
            message: '未能复制到剪贴板，请全选后右键复制', type: 'warning'
          })
        }
      } catch (err) {
        this.$message({
          message: '未能复制到剪贴板，请全选后右键复制', type: 'warning'
        })
      }
    }
  }
})