let MainView = {
	view: function() {return m("div", [
        m("div", {"class":"flex items-center justify-center pa4"},
        [
            m(BeforeButtons),
            m(InputFields),
            m(AfterButtons)
        ]
        ),
        m(Table)
        
    ])}
}