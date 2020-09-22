let AfterButtons = {
    view: function() {return m("span",[
            m("a", {
                "class":"f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box",
                "onclick":function() { state.nextData() }
            },
            [
                m("i", {"class":"fas fa-chevron-right"})
            ]
            ),
            m("a", {
                "class":"f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box",
                "onclick":function() { state.forwardData() }
            },
            [
                m("i", {"class":"fas fa-forward"})
            ]
            ),
            m("a", {
                "class":"f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box",
                "onclick":function() { state.lastData() }
            },
            [
                m("i", {"class":"fas fa-step-forward"})
            ]
            )
        ])

    }
}
