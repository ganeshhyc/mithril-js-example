let Table = {
    view: function(vnode) {
        return m("div", {"class":"pa4"}, 
        m("div", {"class":"overflow-auto"}, 
            m("table", {"class":"f6 w-100 mw8 center","cellspacing":"0"},
            [
                m("thead", 
                m("tr",
                    [
                    m("th", {"class":"fw6 bb b--black-20 tl pb3 pr3 bg-white"}, 
                        m.trust("&nbsp;")
                    ),
                    m("th", {"class":"fw6 bb b--black-20 tl pb3 pr3 bg-white"}, 
                        "Locn_Nbr"
                    ),
                    m("th", {"class":"fw6 bb b--black-20 tl pb3 pr3 bg-white"}, 
                        "Online_ord_Id"
                    ),
                    m("th", {"class":"fw6 bb b--black-20 tl pb3 pr3 bg-white"}, 
                        "KSN_Id"
                    ),
                    m("th", {"class":"fw6 bb b--black-20 tl pb3 pr3 bg-white"}, 
                        "SKU_Prc_type_Cd"
                    )
                    ]
                )
                ),
                m("tbody", {"class":"lh-copy"},
                m({view:function(){
                    return state.allData.map((val,key)=>{
                            return m("tr",
                            [
                            m("td", {"class":"pv3 pr3 bb b--black-20"}, 
                                key+state.model.starting_at_row
                            ),
                            m("td", {"class":"pv3 pr3 bb b--black-20"}, 
                                val.locn_nbr
                            ),
                            m("td", {"class":"pv3 pr3 bb b--black-20"}, 
                                val.online_ord_id
                            ),
                            m("td", {"class":"pv3 pr3 bb b--black-20"}, 
                                val.ksn_id
                            ),
                            m("td", {"class":"pv3 pr3 bb b--black-20"}, 
                                val.sku_prc_type_cd
                            )
                            ]
                        )
                    })
                }}),
                )
            ]
            )
        )
    )
    }
}