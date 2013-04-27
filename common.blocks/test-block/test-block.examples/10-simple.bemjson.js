({
    block: 'b-page',
    title: 'test-block',
    head: [
        { elem: 'css', url: '_10-simple.css', ie: false },
        { elem: 'css', url: '_10-simple', ie: true }
    ],
    content: [
        {
            block: 'test-block',
            content: 'Test block content'
        },
        {
            block: 'yahoo',
            content: 'life is great2'
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_10-simple.js' }
    ]
})
