let BeforeButtons = {
    view: function() {
        return m("span",[
            m("a", {
                "class":"f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box",
                "onclick":function() { state.firstData() }
                },
                [
                    m("i", {"class":"fas fa-step-backward"})
                ]
            ),m("a",{
                "class":"f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box",
                "onclick":function() { state.backwordData() }
                },
                [
                    m("i", {"class":"fas fa-backward"})
                ]
            ),m("a", {
                    "class":"f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4",
                    "onclick":function() { state.prevData() }
                },
                [
                    m("i", {"class":"fas fa-chevron-left"})
                ]
            )
        ])
    }
}