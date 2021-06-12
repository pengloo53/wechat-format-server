module.exports = {
    BASE: {
        'text-align': 'justify',
        'line-height': '1.7em',
        'min-height': '1em'
        // 'letter-spacing': '0.05em',
    },
    block: {
        h2: {
            'font-size': '140%',
            'text-align': 'center',
            'font-weight': 'normal',
            'text-align': 'center',
            'margin': '60px 10px 30px 0px'
        },
        h3: {
            'font-weight': 'bold',
            'font-size': '120%',
            'margin': '40px 10px 20px 0px'
        },
        p: {
            'margin': '0 0 1em 0',
            // 'line-height': '1.75'

        },
        blockquote: {
            'color': '#9a9a9a',
            'padding-left': '10px',
            'background-color': '#fefefe',
            'border-left': '5px solid #dbdbdb',
            'font-size': '0.9em',
            'margin': '1em 0'
        },
        code: {
            'font-size': '80%',
            'overflow': 'auto',
            'background': 'rgb(247, 247, 247)',
            'border-radius': '2px',
            'padding': '1px 3px',
            'line-height': '1.3',
            // 'border': '1px solid #66b1ff',
            'margin': '10px 0',
            'color': '#3a8ee6'
        },
        image: {
            'border-radius': '4px',
            'display': 'block',
            'margin': '20px auto',
            'max-width': '100%',
            // 'box-shadow': '5px 5px 10px 1px #ccc',
            // '-moz-box-shadow': '5px 5px 10px 1px #ccc',
            // '-webkit-box-shadow': '5px 5px 10px 1px #ccc'
        },
        image_org: {
            'border-radius': '4px',
            'display': 'block',
        },
        ol: {
            'margin': '0 10px 20px 10px',
            'padding-left': '20px',
        },
        ul: {
            'margin': '0 10px 20px 10px',
            'padding-left': '20px',
            'list-style': 'circle',
        },
        footnotes: {
            'text-align': 'left',
            'margin': '10px 10px',
            'font-size': '14px'
        }
    },
    inline: {
        // inline element
        listitem: {
            'text-indent': '-20px',
            'display': 'block',
            'margin': '0px 10px',
        },
        codespan: {
            'font-size': '0.8em',
            'color': '#3a8ee6',
            'background': '#fefefe',
            'padding': '1px 3px',
            'border': '1px solid #66b1ff',
            'margin': '0px 2px',
            'border-radius': '2px',
        },
        link: {
            'color': '#ff3502',
            'line-height': '1em'
        },
        wx_link: {
            'color': '#576b95',
            'text-decoration': 'underline',
        },
        strong: {
            'font-weight': 'bold',
        },
        i: {
            'text-decoration': 'underline'
        },
        table: {
            'border-collapse': 'collapse',
            'margin': '20px 0',
        },
        thead: {
            'background': 'rgba(0,0,0,0.05)',
        },
        td: {
            'font-size': '80%',
            'border': '1px solid #dfdfdf',
            'padding': '4px 8px',
        },
        footnote: {
            'font-size': '12px',
        }
    }
}