module.exports = {
    BASE: {
        'text-align': 'justify',
        'line-height': '1.75em',
        'letter-spacing': '0.05em',
    },
    block: {
        h2: {
            'font-size': '140%',
            'text-align': 'center',
            'font-weight': 'normal',
            'text-align': 'center',
            'margin': '60px 10px 30px 10px'
        },
        h3: {
            'font-weight': 'bold',
            'font-size': '120%',
            'margin': '40px 10px 20px 10px'
        },
        p: {
            'margin': '0 10px 20px 10px',
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
            'padding': '10px',
            'line-height': '1.3',
            'border': '1px solid rgb(236,236,236)',
            'margin': '20px 0',
        },
        image: {
            'border-radius': '4px',
            'display': 'block',
            'margin': '20px auto',
            'width': '100%',
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
            'color': '#d14',
            'background': '#fefefe',
            'padding': '3px 5px 0px',
            'border': '1px solid #ddd',
            'margin': '0px 2px',
            'border-radius': '3px',
        },
        link: {
            'color': '#ff3502'
        },
        wx_link: {
            'color': '#576b95',
            'text-decoration': 'none'
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