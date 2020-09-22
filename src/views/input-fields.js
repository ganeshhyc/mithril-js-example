let InputFields = {
    view: function(vnode) {return m("span", {"class":"mr4"},
        [
            m("span", 
            "showing"
            ),
            m("input", {
                "type":"number",
				"style":{"width":"75px"},
                "min":"1",
				"value":state.model.showing,
				"onchange":function (e) { state.changeShowing(e.target.value) }
            }),
            m.trust("&nbsp;"),
            m("span",
            [
                "rows out of",
                m.trust("&nbsp;")
            ]
            ),
			m("input", {
				"type":"number",
				"style":{"width":"75px"},
                "min":"1",
				"value":state.model.rows_out_of,
				"onchange":function (e) { state.changeRowsOutof(e.target.value) }
			}),
            m.trust("&nbsp;"),
            m("span",
            [
                "starting at row",
                m.trust("&nbsp;")
            ]
            ),
            m("input", {
				"type":"number",
                "style":{"width":"75px"},
                "min":"1",
				"value":state.model.starting_at_row,
				"onchange":function (e) { state.changeStartingAtRow(e.target.value) }
			})
        ]
        )
    }
}