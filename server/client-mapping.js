const CLIENTS = [
  {
    id: "XtCzILIa9eFaETToCeLN",
    name: "4.0. Movement Studios",
    ownerName: "Ashley Mushamba",
    ghlLocationId: "XtCzILIa9eFaETToCeLN",
    metaAccountId: "567184127803",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "c4lAjQFMy5MT6MfKNSp4",
    name: "Absolute Dance Center",
    ownerName: "Jacqueline Weltman",
    ghlLocationId: "c4lAjQFMy5MT6MfKNSp4",
    metaAccountId: "1821632398781459",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "QRUskBBybaDXmPrObcqz",
    name: "Academy of Ballet",
    ownerName: "Anna Cathy Dunlap",
    ghlLocationId: "QRUskBBybaDXmPrObcqz",
    metaAccountId: "1812790333001957",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "gTNyIqCsysVeg6IA9FB5",
    name: "Academy of Dance Arts (Wisconsin)",
    ownerName: "Lindsay Stammer",
    ghlLocationId: "gTNyIqCsysVeg6IA9FB5",
    metaAccountId: "1909612702897117",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "NuRowh6GtLEIzFnajG8r",
    name: "Academy of Dance Arts & Apparel",
    ownerName: "Emily Robbins",
    ghlLocationId: "NuRowh6GtLEIzFnajG8r",
    metaAccountId: "824146554385173",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "e8dEFtlJkwyIPaNsBzaF",
    name: "Acapriccio Dance Company",
    ownerName: "Jennifer Kinsey",
    ghlLocationId: "e8dEFtlJkwyIPaNsBzaF",
    metaAccountId: "644480276506901",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "iDeh54G1RuSKB3rs9kt1",
    name: "Accent Dance Studios",
    ownerName: "Rima Oganesyan",
    ghlLocationId: "iDeh54G1RuSKB3rs9kt1",
    metaAccountId: "1674397749918639",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "Q3UdZWHHMUIlVe17QGLv",
    name: "Adagio School of Dance",
    ownerName: "Kristian Altuve",
    ghlLocationId: "Q3UdZWHHMUIlVe17QGLv",
    metaAccountId: "947996687320455",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "2L07WzIIb6Rrs0KNxeMK",
    name: "Agape Dance Lab",
    ownerName: "Ellen Swerdlow",
    ghlLocationId: "2L07WzIIb6Rrs0KNxeMK",
    metaAccountId: "10151519671972408",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "GbCzA2AuL6NRyXbeYW84",
    name: "Alabama Dance Academy",
    ownerName: "Pamela Merkel",
    ghlLocationId: "GbCzA2AuL6NRyXbeYW84",
    metaAccountId: "1113532123972843",
    accountManager: "Jessica Kane",
    status: "Inactive"
  },
  {
    id: "Ud9z7No5kTqvZyVxyVTm",
    name: "ALICATS Dance and More",
    ownerName: "Alison Woodbury",
    ghlLocationId: "Ud9z7No5kTqvZyVxyVTm",
    metaAccountId: "261367974526269",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "yS36AnLKkECvVMV3z7TM",
    name: "All Things Music and Dance Company",
    ownerName: "Dawn M Burnes",
    ghlLocationId: "yS36AnLKkECvVMV3z7TM",
    metaAccountId: "1250778520003041",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "0mkmi87i1DHvOOOltkx7",
    name: "Ann Carroll School of Dance",
    ownerName: "Laura Carroll",
    ghlLocationId: "0mkmi87i1DHvOOOltkx7",
    metaAccountId: "10151595818883012",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "1IwE8mXhg9smglWRw8vx",
    name: "Ann Parsley School of Dance",
    ownerName: "Amber Michalik",
    ghlLocationId: "1IwE8mXhg9smglWRw8vx",
    metaAccountId: "678797181513665",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "KEXhZLEysNvIN1rm44fy",
    name: "Anna Marie Dance Studio",
    ownerName: "Ashley Litwin",
    ghlLocationId: "KEXhZLEysNvIN1rm44fy",
    metaAccountId: "410544940674763",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "2AsX6eqAzA4BzKhghNEe",
    name: "Apopka Dance Center",
    ownerName: "Krystan Weinstein",
    ghlLocationId: "2AsX6eqAzA4BzKhghNEe",
    metaAccountId: "1639944086827479",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "L1f7QVhDo9XcdsyxoASr",
    name: "Art of Dance",
    ownerName: "Kim Gang",
    ghlLocationId: "L1f7QVhDo9XcdsyxoASr",
    metaAccountId: "160240527081746",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "BUdrA08ZXMtAEQGjQals",
    name: "Art's House Schools",
    ownerName: "Sophia Harrison",
    ghlLocationId: "BUdrA08ZXMtAEQGjQals",
    metaAccountId: "67705783",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "73T719MOaB27ZJQBxGsq",
    name: "Artistic Fusion Dance Academy",
    ownerName: "Jen Jarnot",
    ghlLocationId: "73T719MOaB27ZJQBxGsq",
    metaAccountId: "3135833336661752",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "GDi7bY3W0YM2sITsBhsf",
    name: "Artistry in Motion Performing Arts Center",
    ownerName: "Jessica Speakes",
    ghlLocationId: "GDi7bY3W0YM2sITsBhsf",
    metaAccountId: "1023957322965954",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "51TDq5EogpgCS9zMKrhS",
    name: "Asase Yaa School of the Arts",
    ownerName: "Kofi Osei Williams",
    ghlLocationId: "51TDq5EogpgCS9zMKrhS",
    metaAccountId: "698367216571488",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "vxAdrgJEAD1OweEfECiT",
    name: "Ascend Studios",
    ownerName: "Jessie Dolezel",
    ghlLocationId: "vxAdrgJEAD1OweEfECiT",
    metaAccountId: "302111054337763",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "RbtxKFY6d5wQJ9c2qW4W",
    name: "Aspirations Dance Company",
    ownerName: "Kelly Nelms",
    ghlLocationId: "RbtxKFY6d5wQJ9c2qW4W",
    metaAccountId: "240821182081518",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "QChOKbgGddpbEdNYkVPD",
    name: "Avanti Dance Company",
    ownerName: "Juli Dean",
    ghlLocationId: "QChOKbgGddpbEdNYkVPD",
    metaAccountId: "6362426617105351",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "P6HagKyJxTx1kbpYSnie",
    name: "Backstage Dance Connection",
    ownerName: "Sean Urick",
    ghlLocationId: "P6HagKyJxTx1kbpYSnie",
    metaAccountId: "797179775994081",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "BDLyvbFBUZMLg7wtvna8",
    name: "Balance Dance + Gymnastics",
    ownerName: "Laura Hamm",
    ghlLocationId: "BDLyvbFBUZMLg7wtvna8",
    metaAccountId: "1210365786170837",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "H5sztsD5YwwKtIvkDBnV",
    name: "Ballet Kalamazoo",
    ownerName: "Amy Russell",
    ghlLocationId: "H5sztsD5YwwKtIvkDBnV",
    metaAccountId: "2085750801856926",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "uYCjoBfi3ukERVXBWl4m",
    name: "Belle Academy of Dance",
    ownerName: "Kay Ferris",
    ghlLocationId: "uYCjoBfi3ukERVXBWl4m",
    metaAccountId: "361691383367654",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "B2LWmOZf6VBfKTAsmDFa",
    name: "Bethesda Conservatory of Dance",
    ownerName: "Colleen Snyder",
    ghlLocationId: "B2LWmOZf6VBfKTAsmDFa",
    metaAccountId: "747527781474374",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "SePG2BPVjfOqGU6dX76b",
    name: "Broadway Performing Art Center",
    ownerName: "Tina Casula",
    ghlLocationId: "SePG2BPVjfOqGU6dX76b",
    metaAccountId: "823393972938282",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "AcS8Yy7GwjyR0PssXoBA",
    name: "Carrollton Academy of Dance",
    ownerName: "Heather Parker",
    ghlLocationId: "AcS8Yy7GwjyR0PssXoBA",
    metaAccountId: "1067555911682173",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "PWQ4fqF1CkNG9wYAwu3k",
    name: "Center Stage Dance & Theatre School",
    ownerName: "Jonathan Skolnik",
    ghlLocationId: "PWQ4fqF1CkNG9wYAwu3k",
    metaAccountId: "4136015475678",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "vXCcRsZpbGaXTUprm6cL",
    name: "Central Florida Dance Center",
    ownerName: "Nicole Carpenito",
    ghlLocationId: "vXCcRsZpbGaXTUprm6cL",
    metaAccountId: "10153126296361722",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "0HxEDwS96Wcg9iplB8f2",
    name: "Central New York Academy Of Dance",
    ownerName: "Eileen Witt",
    ghlLocationId: "0HxEDwS96Wcg9iplB8f2",
    metaAccountId: "1214940030301608",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "KT5FUlufd80rKaIfUNHg",
    name: "Cherilyn's School of Dance",
    ownerName: "Cherilyn Raab",
    ghlLocationId: "KT5FUlufd80rKaIfUNHg",
    metaAccountId: "719332882748444",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "tZUWZZ7z6cv1nrSyyhGm",
    name: "Clarkesville School of Dance",
    ownerName: "Francie Keene",
    ghlLocationId: "tZUWZZ7z6cv1nrSyyhGm",
    metaAccountId: "1709488139552574",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "0NwdpPxINwHTJ9BSODAF",
    name: "Converge Performing Arts Center",
    ownerName: "Kellie Lightfoot",
    ghlLocationId: "0NwdpPxINwHTJ9BSODAF",
    metaAccountId: "535775530420289",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "dAueoRIEAAxwTlBNwXvr",
    name: "Core Dance Company",
    ownerName: "Torie Gigante",
    ghlLocationId: "dAueoRIEAAxwTlBNwXvr",
    metaAccountId: "1482541948998233",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "xodWjyyB94ZNQoO4Nboj",
    name: "Creative Dance Studio",
    ownerName: "Jessica Canino",
    ghlLocationId: "xodWjyyB94ZNQoO4Nboj",
    metaAccountId: "40863703",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "9N2mdsC0yZfWprRGulss",
    name: "Creative Impulse Dance Company",
    ownerName: "Tahirah Bowrey",
    ghlLocationId: "9N2mdsC0yZfWprRGulss",
    metaAccountId: "1747910692428427",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "kzynyhObXTM0ntwkXX9h",
    name: "Creative Steps Dance Studio",
    ownerName: "Michelle Shirley",
    ghlLocationId: "kzynyhObXTM0ntwkXX9h",
    metaAccountId: "148144980797117",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "vrCnbVA54Qyv09jLm9R0",
    name: "Dance Academy of Virginia",
    ownerName: "Katherine Horrigan",
    ghlLocationId: "vrCnbVA54Qyv09jLm9R0",
    metaAccountId: "879993756146742",
    accountManager: "Kristian Altuve",
    status: "Active"
  },
  {
    id: "A71i2qDFgDxkytUkLsQw",
    name: "Dance Arts Academy",
    ownerName: "Dotty H",
    ghlLocationId: "A71i2qDFgDxkytUkLsQw",
    metaAccountId: "10155430297448089",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "DlTf01jbj7waBpWIOL8f",
    name: "DANCE by Eliese",
    ownerName: "Eliese Freeman-Crumley",
    ghlLocationId: "DlTf01jbj7waBpWIOL8f",
    metaAccountId: "9821652001250971",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "v14p8BApsxKhuCOgR6MT",
    name: "Dance Connection",
    ownerName: "Joe Naftal",
    ghlLocationId: "v14p8BApsxKhuCOgR6MT",
    metaAccountId: "450023937106110",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "kglYGUvrKgvUiwIh9Gms",
    name: "Dance Endeavors",
    ownerName: "Juli Caldwell",
    ghlLocationId: "kglYGUvrKgvUiwIh9Gms",
    metaAccountId: "1410958666704534",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "3sCrfAwDvVYtRL2VjnZR",
    name: "Dance Explosion Infinity",
    ownerName: "Lauren Di Blasi",
    ghlLocationId: "3sCrfAwDvVYtRL2VjnZR",
    metaAccountId: "374736408320251",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "GqQhckYCKDBXiCvvgaNE",
    name: "Dance Gallery of South Dakota",
    ownerName: "Arthur Kriens",
    ghlLocationId: "GqQhckYCKDBXiCvvgaNE",
    metaAccountId: "12372313",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "7ena5yoKpGKlMrzLmwHW",
    name: "Dance Steps Miami",
    ownerName: "Patricia Nunez",
    ghlLocationId: "7ena5yoKpGKlMrzLmwHW",
    metaAccountId: "127482481095967",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "tKCs0HV9Ki0Fgg8i24aR",
    name: "Dance Unlimited Hamden CT",
    ownerName: "Janet Bracale",
    ghlLocationId: "tKCs0HV9Ki0Fgg8i24aR",
    metaAccountId: "1390147068913281",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "PMmBvrga2MHFCXf8bfkn",
    name: "Dance Unlimited LLC Augusta ME",
    ownerName: "Laura Lewis",
    ghlLocationId: "PMmBvrga2MHFCXf8bfkn",
    metaAccountId: "10213437211706639",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "1SzkJM3H4SENlOv1oDW6",
    name: "Dance Unlimited",
    ownerName: "Brittanny Pruit",
    ghlLocationId: "1SzkJM3H4SENlOv1oDW6",
    metaAccountId: "463046501578650",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "nA6lJFqgq7dFECglEcsL",
    name: "Dance With ME",
    ownerName: "Megan Orlandella",
    ghlLocationId: "nA6lJFqgq7dFECglEcsL",
    metaAccountId: "448857931287479",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "CvOlZpi44Oc76fOVdgDD",
    name: "Dance/10 Performing Arts Center",
    ownerName: "Ryan Justus",
    ghlLocationId: "CvOlZpi44Oc76fOVdgDD",
    metaAccountId: "2102892126737582",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "E3gRjcGfIMumR5hIPSOT",
    name: "Dancebox Studio",
    ownerName: "Corinne Colon",
    ghlLocationId: "E3gRjcGfIMumR5hIPSOT",
    metaAccountId: "13114121",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "wvO6ouj8Ue2S2Weo1fHj",
    name: "Dancettude Studio & Fitness",
    ownerName: "Sorayda Solis",
    ghlLocationId: "wvO6ouj8Ue2S2Weo1fHj",
    metaAccountId: "1476024713884692",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "4Wk3vWrYluPs7RWaLgTS",
    name: "Dawn Crafton Dance Connection",
    ownerName: "Kelly Welch",
    ghlLocationId: "4Wk3vWrYluPs7RWaLgTS",
    metaAccountId: "322319101606913",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "xjbmEHBO4bKJZv42UzXM",
    name: "Debbie's School of Dance",
    ownerName: "Debbie Carney",
    ghlLocationId: "xjbmEHBO4bKJZv42UzXM",
    metaAccountId: "729350149004608",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "sP6jWTZQVRdT30XiIne0",
    name: "Divine Love Dance Academy",
    ownerName: "qahatet re",
    ghlLocationId: "sP6jWTZQVRdT30XiIne0",
    metaAccountId: "1964799083991456",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "ql5Df1sZhUnAqR3XuRI7",
    name: "Dream Believe Achieve Dance",
    ownerName: "Carissa Monroe",
    ghlLocationId: "ql5Df1sZhUnAqR3XuRI7",
    metaAccountId: "1793560957493716",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "kfh8tQdL0iGzeK5ltX21",
    name: "Drive Dance Company",
    ownerName: "Alison Simolaris",
    ghlLocationId: "kfh8tQdL0iGzeK5ltX21",
    metaAccountId: "339864633672271",
    accountManager: "Kristian Altuve",
    status: "Active"
  },
  {
    id: "hlCXQffjRcd4WAQ2erKQ",
    name: "DuHadway Dance Dimensions",
    ownerName: "Jillian DuHadway",
    ghlLocationId: "hlCXQffjRcd4WAQ2erKQ",
    metaAccountId: "1169213247502292",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "r4UTfrSroglN9ojrFXyi",
    name: "Dynamic Perception Dance Company",
    ownerName: "Jessica Garret",
    ghlLocationId: "r4UTfrSroglN9ojrFXyi",
    metaAccountId: "1231689824673565",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "BiaPTvXSMQ8jvtf8wF6J",
    name: "Eclipse Dance Complex",
    ownerName: "Sierra Medwiq",
    ghlLocationId: "BiaPTvXSMQ8jvtf8wF6J",
    metaAccountId: "896481709341417",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "MhF1kQPV6B6XC71w27cx",
    name: "Elements Urban Arts Collective",
    ownerName: "Alana Hill",
    ghlLocationId: "MhF1kQPV6B6XC71w27cx",
    metaAccountId: "17975469",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "ZU2MTfwYpuQQmFrbdAlw",
    name: "Eleve Performing Arts Center",
    ownerName: "Brittany Milan",
    ghlLocationId: "ZU2MTfwYpuQQmFrbdAlw",
    metaAccountId: "1597814227808407",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "nVHskJkyfE8Ib0oRt6lp",
    name: "Elite Dance Company",
    ownerName: "Tara DeMarr",
    ghlLocationId: "nVHskJkyfE8Ib0oRt6lp",
    metaAccountId: "1345393100168480",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "fxgm1sp1ukWsE0naObIY",
    name: "Encore Dance Academy",
    ownerName: "Kelly Komorowski",
    ghlLocationId: "fxgm1sp1ukWsE0naObIY",
    metaAccountId: "1402779547549688",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "QYHxrZZqaVPIOPstMYC6",
    name: "Energy Arts Dance",
    ownerName: "Krista Fairchild",
    ghlLocationId: "QYHxrZZqaVPIOPstMYC6",
    metaAccountId: "895497021873657",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "hBrdi576omGN8iSKflCq",
    name: "Evergreen Dance Academy",
    ownerName: "Kelli Dowling",
    ghlLocationId: "hBrdi576omGN8iSKflCq",
    metaAccountId: "1195360305475950",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "Oe06VZ3UtHHpDriFNgUj",
    name: "Expressions Dance Theatre",
    ownerName: "Cara Patrick",
    ghlLocationId: "Oe06VZ3UtHHpDriFNgUj",
    metaAccountId: "1612315362649241",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "CIPr3ln3CXpMOaz2L0Oc",
    name: "Expressions in Rhythm Studio",
    ownerName: "Belinda Brown",
    ghlLocationId: "CIPr3ln3CXpMOaz2L0Oc",
    metaAccountId: "1565347827296357",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "xBKbboPI175n5J88tYvr",
    name: "Fancy Feet Dance Academy",
    ownerName: "Elizabeth Ercila",
    ghlLocationId: "xBKbboPI175n5J88tYvr",
    metaAccountId: "1153688159345835",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "7ZFHEauaYmipO8uOUzXH",
    name: "Fearless Headquarters Dance Studio",
    ownerName: "Phillisia Sims",
    ghlLocationId: "7ZFHEauaYmipO8uOUzXH",
    metaAccountId: "1882405385884176",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "gFgBMeB9FClGVAA9ZXSW",
    name: "Fierce Dance Academy",
    ownerName: "Ashley Zelano",
    ghlLocationId: "gFgBMeB9FClGVAA9ZXSW",
    metaAccountId: "128254232",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "EPmwRTEAJt5Yzciau9mP",
    name: "FIERCE The Dance Academy",
    ownerName: "Alberto Pena",
    ghlLocationId: "EPmwRTEAJt5Yzciau9mP",
    metaAccountId: "688305223987055",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "UJLRIPomQMEhYUtQj6C5",
    name: "First Class Dance Studio",
    ownerName: "Gaynelle Costner",
    ghlLocationId: "UJLRIPomQMEhYUtQj6C5",
    metaAccountId: "787266003845463",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "svB99N4YaKOfPWLF2meh",
    name: "Flava Dance Academy",
    ownerName: "Marissa Hernandez",
    ghlLocationId: "svB99N4YaKOfPWLF2meh",
    metaAccountId: "3783927261879483",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "ZDi5wJTlBfbejOixu4t0",
    name: "Forerunners for the Arts",
    ownerName: "Haley Mann",
    ghlLocationId: "ZDi5wJTlBfbejOixu4t0",
    metaAccountId: "281741549826520",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "QQFyTkIC02xB3Ry8lCnw",
    name: "Fox Dance Company",
    ownerName: "Ali Fox",
    ghlLocationId: "QQFyTkIC02xB3Ry8lCnw",
    metaAccountId: "1223156535136818",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "jbLyWQKE1TlGehPhM6so",
    name: "Grace Ballet LLC",
    ownerName: "Tara Miller",
    ghlLocationId: "jbLyWQKE1TlGehPhM6so",
    metaAccountId: "1062607508533258",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "uCx7LxlamV8YNoM5IWtG",
    name: "Grace Kelly Studio",
    ownerName: "Amanda Seibert",
    ghlLocationId: "uCx7LxlamV8YNoM5IWtG",
    metaAccountId: "1080283532538243",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "A7mIQoc0Y9iGzlA5LUZJ",
    name: "Grand Central Academy of Performing Arts",
    ownerName: "Wendi Bergstrom",
    ghlLocationId: "A7mIQoc0Y9iGzlA5LUZJ",
    metaAccountId: "1214940030301608",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "apJUCXXAjq0zHEgr7fZg",
    name: "Great South Bay Dance",
    ownerName: "Elizabeth Fanning",
    ghlLocationId: "apJUCXXAjq0zHEgr7fZg",
    metaAccountId: "664278492483223",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "swLXYUEbWhFCH6yphXou",
    name: "Gwendolyn Bye Dance Center",
    ownerName: "Andrea Brock",
    ghlLocationId: "swLXYUEbWhFCH6yphXou",
    metaAccountId: "768397026124975",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "1w2Qzj6wpa286nfohYon",
    name: "Haven Dance",
    ownerName: "Joslyn Evans",
    ghlLocationId: "1w2Qzj6wpa286nfohYon",
    metaAccountId: "667015498163723",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "LZ6ZvwDRerWPuC3ho5pp",
    name: "Heritage Art Academy",
    ownerName: "Sarkis Ablabutyan",
    ghlLocationId: "LZ6ZvwDRerWPuC3ho5pp",
    metaAccountId: "119186186197775",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "lGHhuFvN0FLDC396zwVu",
    name: "Ignite Dance Center",
    ownerName: "Lisa Prentice",
    ghlLocationId: "lGHhuFvN0FLDC396zwVu",
    metaAccountId: "112386337",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "gztdABxdDYGfbg2nUNzc",
    name: "In Motion Dance Center",
    ownerName: "Lauren Mcwain",
    ghlLocationId: "gztdABxdDYGfbg2nUNzc",
    metaAccountId: "49053358",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "O6aVjGAvbacOBrIjjvlV",
    name: "Infinite Dance Studio",
    ownerName: "Desiree Samoska",
    ghlLocationId: "O6aVjGAvbacOBrIjjvlV",
    metaAccountId: "3381718958717451",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "Sk2xN4AqAKEoibVb7qud",
    name: "Inland Empire Dance Center",
    ownerName: "Jamie Azpeitia-Sachs",
    ghlLocationId: "Sk2xN4AqAKEoibVb7qud",
    metaAccountId: "766232399053811",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "Nr9zGm3mxx7hLv3Wzdkg",
    name: "Inspire Dance Academy LLC",
    ownerName: "Natalie McQuiston",
    ghlLocationId: "Nr9zGm3mxx7hLv3Wzdkg",
    metaAccountId: "1355259105511459",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "SdVwiAzaLrQpYNCftE8C",
    name: "Integrity Dance Academy",
    ownerName: "Jaclyn Kail",
    ghlLocationId: "SdVwiAzaLrQpYNCftE8C",
    metaAccountId: "1568724110467947",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "zoKl0ckHyfboRwU9F1wX",
    name: "International Dance",
    ownerName: "Elizabeth Hawkins",
    ghlLocationId: "zoKl0ckHyfboRwU9F1wX",
    metaAccountId: "1722453115204899",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "ygpeFmAyKnv1uU3XtTtH",
    name: "Jamz Dance Studio",
    ownerName: "Giana Krieger",
    ghlLocationId: "ygpeFmAyKnv1uU3XtTtH",
    metaAccountId: "1754285725222401",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "vMUln99YBvOHgghNhYKd",
    name: "JB Dance Wellness",
    ownerName: "Julianne Balavender",
    ghlLocationId: "vMUln99YBvOHgghNhYKd",
    metaAccountId: "735187315950350",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "B0FDXKfuRjwzl64UNWJb",
    name: "Jete Dance Centre",
    ownerName: "Ryan McGarry",
    ghlLocationId: "B0FDXKfuRjwzl64UNWJb",
    metaAccountId: "1027035029524400",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "CjDSrJV49w6SFrcJBc0L",
    name: "JMD STUDIOS",
    ownerName: "Alycia Carlson",
    ghlLocationId: "CjDSrJV49w6SFrcJBc0L",
    metaAccountId: "927858551132983",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "Q0vkvSoTmAMSgqSDqo6A",
    name: "Just Dance School of Performing Arts",
    ownerName: "Melissa Arizzi",
    ghlLocationId: "Q0vkvSoTmAMSgqSDqo6A",
    metaAccountId: "977562343591670",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "vIEikNyZRUSV8JNHO8nn",
    name: "JZT Dance",
    ownerName: "Edward Taddei",
    ghlLocationId: "vIEikNyZRUSV8JNHO8nn",
    metaAccountId: "912856110805372",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "i8SRZ1B3ZqFOi1hKUbz1",
    name: "Katura Dance Academy",
    ownerName: "Kimberly Jones",
    ghlLocationId: "i8SRZ1B3ZqFOi1hKUbz1",
    metaAccountId: "2185418271941777",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "FDjGYxTu7cBLZSK3pDUi",
    name: "Kelly's school of Dance",
    ownerName: "Kelly Steffen",
    ghlLocationId: "FDjGYxTu7cBLZSK3pDUi",
    metaAccountId: "774312690310144",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "ww4ka4xaGBb6JOUKdVwo",
    name: "Kerri's Dance Studio",
    ownerName: "Kerri Watts",
    ghlLocationId: "ww4ka4xaGBb6JOUKdVwo",
    metaAccountId: "1550482205938217",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "eOU6vPjr7o41zlQKwRhH",
    name: "Kinetic Dance Force",
    ownerName: "Kerri Lake",
    ghlLocationId: "eOU6vPjr7o41zlQKwRhH",
    metaAccountId: "4004069556524152",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "J4WWLQJS3mmFDhWe1tv3",
    name: "Kristie Wright School Of Dance",
    ownerName: "Kristie Smith",
    ghlLocationId: "J4WWLQJS3mmFDhWe1tv3",
    metaAccountId: "673556918743818",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "UeWoHZoRqW7ADlEqGsWz",
    name: "La Danse Academie",
    ownerName: "Lori Bowen",
    ghlLocationId: "UeWoHZoRqW7ADlEqGsWz",
    metaAccountId: "233748152",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "9qC7SjAPjzNhhsX8IfWH",
    name: "Laveen Dance & Cheer",
    ownerName: "Deb Beauchamp",
    ghlLocationId: "9qC7SjAPjzNhhsX8IfWH",
    metaAccountId: "1159691475740539",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "sdxjwgFFx6vQ5t8IByTd",
    name: "Leaps and Bounds Dance Academy",
    ownerName: "Katie Collier",
    ghlLocationId: "sdxjwgFFx6vQ5t8IByTd",
    metaAccountId: "556044880563749",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "Bg0oC2Qk1xRyenFHS5Lw",
    name: "Legacy Dance Academy",
    ownerName: "Jennifer Palmer",
    ghlLocationId: "Bg0oC2Qk1xRyenFHS5Lw",
    metaAccountId: "570462554725257",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "QTgh0MZC0hwV5DFMdudA",
    name: "Level Dance Project",
    ownerName: "Barbara Martin",
    ghlLocationId: "QTgh0MZC0hwV5DFMdudA",
    metaAccountId: "998689082193438",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "LZqRxd7BxZKTTD1qBacv",
    name: "Libra Dance Studio",
    ownerName: "Laura Giacomelli",
    ghlLocationId: "LZqRxd7BxZKTTD1qBacv",
    metaAccountId: "1723981538506117",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "3acKpdTlDtSFdskDT1IF",
    name: "Littleton Ballet Academy",
    ownerName: "Alison Jaramillo",
    ghlLocationId: "3acKpdTlDtSFdskDT1IF",
    metaAccountId: "745092316764722",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "glF9JzGRJ6SAN3kjioje",
    name: "Lotus Performing Arts",
    ownerName: "Stephanie Simms",
    ghlLocationId: "glF9JzGRJ6SAN3kjioje",
    metaAccountId: "3873383676018561",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "7qpENB98QyFyS0gWiUam",
    name: "Lovely Leaps",
    ownerName: "Lisa Mccabe",
    ghlLocationId: "7qpENB98QyFyS0gWiUam",
    metaAccountId: "708974213714034",
    accountManager: "Kristian Altuve",
    status: "Active"
  },
  {
    id: "MYKynk1OWcJWP87Yd0io",
    name: "M.A.D.E. STARS",
    ownerName: "Vanera Aponte",
    ghlLocationId: "MYKynk1OWcJWP87Yd0io",
    metaAccountId: "974403204382455",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "p36zJGhGNFReHAjNpJNq",
    name: "Make Your Mark Dance",
    ownerName: "Meagan McGratten",
    ghlLocationId: "p36zJGhGNFReHAjNpJNq",
    metaAccountId: "46487164",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "aE22dfgBtWII7j8DqbL3",
    name: "Mary Lou's School of Dance",
    ownerName: "Lanie Pile",
    ghlLocationId: "aE22dfgBtWII7j8DqbL3",
    metaAccountId: "1166720734393144",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "0oQwRQDFUHFiEnpYkAFv",
    name: "Miami Dance Project",
    ownerName: "Barbara Delgado",
    ghlLocationId: "0oQwRQDFUHFiEnpYkAFv",
    metaAccountId: "574299565200084",
    accountManager: "Kristian Altuve",
    status: "Inactive"
  },
  {
    id: "gv835DbsE8V8uLxp8ERp",
    name: "Miss Colleens Elite Dancentre",
    ownerName: "Colleen Gunn",
    ghlLocationId: "gv835DbsE8V8uLxp8ERp",
    metaAccountId: "966861522089148",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "BgdXdDapNLNhG1XhFXo2",
    name: "Miss Mare's All About Dance",
    ownerName: "Maryann Janezic",
    ghlLocationId: "BgdXdDapNLNhG1XhFXo2",
    metaAccountId: "2613919458961419",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "d76D4rKd9Att93XAUULu",
    name: "Momentum Performing Arts",
    ownerName: "Nikki Merchut",
    ghlLocationId: "d76D4rKd9Att93XAUULu",
    metaAccountId: "985533059990235",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "YaV8pNZCs3uz55xfn7kF",
    name: "Mountain Movers Creative Arts",
    ownerName: "Angie Craft",
    ghlLocationId: "YaV8pNZCs3uz55xfn7kF",
    metaAccountId: "2459568447545677",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "vKXOgzFKUDB6NJspA7qZ",
    name: "Mrs. Jenkins Dance Academy",
    ownerName: "Stephanie Jenkins",
    ghlLocationId: "vKXOgzFKUDB6NJspA7qZ",
    metaAccountId: "10152148624944551",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "HIpCpys1bxGYbuJfKAUy",
    name: "N'Ferno Performing Arts Center",
    ownerName: "Kaniesha Reeder",
    ghlLocationId: "HIpCpys1bxGYbuJfKAUy",
    metaAccountId: "10201177173969604",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "kREafwo49zr0Jv0h20RB",
    name: "Next Level Dance Center",
    ownerName: "Lianne Hart",
    ghlLocationId: "kREafwo49zr0Jv0h20RB",
    metaAccountId: "1180045880615811",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "cmcp5ZQW37ALsZug9bpt",
    name: "North Shore Dance Academy",
    ownerName: "Tammy Buldoc",
    ghlLocationId: "cmcp5ZQW37ALsZug9bpt",
    metaAccountId: "2399837443764662",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "oEK3Ncqy2gOJ1sqYbmk0",
    name: "Norwalk Academy of Dance",
    ownerName: "Melissa Greco",
    ghlLocationId: "oEK3Ncqy2gOJ1sqYbmk0",
    metaAccountId: "27430259",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "aLxMjyqnJiNe6922RHSE",
    name: "On Stage Dance Studio Inc",
    ownerName: "Jen Keate",
    ghlLocationId: "aLxMjyqnJiNe6922RHSE",
    metaAccountId: "469415745244277",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "ttqG3biaTa44PABSpHa9",
    name: "ONE Academy of Dance",
    ownerName: "Meredith Dunham",
    ghlLocationId: "ttqG3biaTa44PABSpHa9",
    metaAccountId: "1748592542420415",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "MO6NlhN73gNMK6vwDbWu",
    name: "Ovation Performing Arts/Dance",
    ownerName: "Nikki O'Neil",
    ghlLocationId: "MO6NlhN73gNMK6vwDbWu",
    metaAccountId: "27485683",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "UujtWoePPWWOCgwtkoNE",
    name: "P.O.M. Silver Spring",
    ownerName: "Tasha Casey",
    ghlLocationId: "UujtWoePPWWOCgwtkoNE",
    metaAccountId: "525958848024591",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "R5HWYR6Tbd5l4fW3QDBX",
    name: "passMORE DANCE",
    ownerName: "Kathy Passmore",
    ghlLocationId: "R5HWYR6Tbd5l4fW3QDBX",
    metaAccountId: "1237949321371544",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "3LKKHKLs0Opjs6F8FP8w",
    name: "Pointe Of Surrender Dance Studio",
    ownerName: "Erica Hill",
    ghlLocationId: "3LKKHKLs0Opjs6F8FP8w",
    metaAccountId: "538046245824749",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "202ILurmA5TWEd0wmmzI",
    name: "Precision Dance Studio",
    ownerName: "Danielle Williamson",
    ghlLocationId: "202ILurmA5TWEd0wmmzI",
    metaAccountId: "1282949046265939",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "dkZgwWZR4zzxRWXXvS1R",
    name: "RCDC of the Performing Arts",
    ownerName: "Robin Cotler",
    ghlLocationId: "dkZgwWZR4zzxRWXXvS1R",
    metaAccountId: "696016195620000",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "9sB2KJt1tXEJnMWAkXcp",
    name: "Revamp Contemporary Dance Company",
    ownerName: "Thomasina Jones",
    ghlLocationId: "9sB2KJt1tXEJnMWAkXcp",
    metaAccountId: "3439358662989968",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "KLcIHCmhJKDph3ZKPaQ7",
    name: "Richmond Academy of Ballet",
    ownerName: "Jack Bettin",
    ghlLocationId: "KLcIHCmhJKDph3ZKPaQ7",
    metaAccountId: "1214380813744385",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "246VYNIvx3lnJ00qtPF8",
    name: "Rise Mvmt Studio",
    ownerName: "Jessenya Akerman",
    ghlLocationId: "246VYNIvx3lnJ00qtPF8",
    metaAccountId: "15336975",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "N3hfv1DRYuH4kgJEFqKw",
    name: "Royal Performance Company",
    ownerName: "Peggy Harlander",
    ghlLocationId: "N3hfv1DRYuH4kgJEFqKw",
    metaAccountId: "323897807429190",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "0N4Mpb63AIw4nP0uQB58",
    name: "Scarsdale Ballet Studio",
    ownerName: "Rosemary Saur",
    ghlLocationId: "0N4Mpb63AIw4nP0uQB58",
    metaAccountId: "786661243141199",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "OLBhzkjIGQHJBm8w4MrD",
    name: "Scripps Performing Arts Academy",
    ownerName: "Angela Amoroso",
    ghlLocationId: "OLBhzkjIGQHJBm8w4MrD",
    metaAccountId: "68502669",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "UjsHoOL0sVvy38Q4miea",
    name: "Shoreline Dance Academy",
    ownerName: "Heather Wanner",
    ghlLocationId: "UjsHoOL0sVvy38Q4miea",
    metaAccountId: "1472805864064412",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "aoZ8PYuHKbmRUhCcd2v9",
    name: "Silver City Dance Center",
    ownerName: "Judy Sullivan",
    ghlLocationId: "aoZ8PYuHKbmRUhCcd2v9",
    metaAccountId: "611509482695127",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "kRRwB3pF0N5rY1JYqFUl",
    name: "Simply Inspired Dance",
    ownerName: "Jerleen Norey",
    ghlLocationId: "kRRwB3pF0N5rY1JYqFUl",
    metaAccountId: "1164333921715359",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "OUi4ow7PWE2vuNr6Uycj",
    name: "Sound Motion Dance Academy",
    ownerName: "Charlie McGregor Hastings",
    ghlLocationId: "OUi4ow7PWE2vuNr6Uycj",
    metaAccountId: "1848083742808296",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "BEVlcmGcueLWDwG5dPnD",
    name: "Southeastern Indiana Dance",
    ownerName: "Lydia Woodward",
    ghlLocationId: "BEVlcmGcueLWDwG5dPnD",
    metaAccountId: "328107028051302",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "1STiyKfEVZetaUqcmgj7",
    name: "Southwest Synergy Dance",
    ownerName: "Connie Oreel",
    ghlLocationId: "1STiyKfEVZetaUqcmgj7",
    metaAccountId: "107721422652190",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "kmtC9bSciJEdeByd9LPr",
    name: "Stageworks Academy Of The Performing Arts",
    ownerName: "Darla Lemay",
    ghlLocationId: "kmtC9bSciJEdeByd9LPr",
    metaAccountId: "425949476642421",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "GPgLGjbXEutXXDlmehQd",
    name: "STEPS School of Dance",
    ownerName: "Lauren Ben Yaaqov",
    ghlLocationId: "GPgLGjbXEutXXDlmehQd",
    metaAccountId: "364525830",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "7rkfxTRTNwYRoCvtPwmE",
    name: "Studio C Dance and Arts",
    ownerName: "Christine Pirtle",
    ghlLocationId: "7rkfxTRTNwYRoCvtPwmE",
    metaAccountId: "700204466116414",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "BzOw9M7JG70TgTR1gCYy",
    name: "Studio Dance4u",
    ownerName: "Alla Kocherga",
    ghlLocationId: "BzOw9M7JG70TgTR1gCYy",
    metaAccountId: "916899029676727",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "rnOilGzoDi0V8eyHAjvh",
    name: "Studio Dee",
    ownerName: "Dee Reusch",
    ghlLocationId: "rnOilGzoDi0V8eyHAjvh",
    metaAccountId: "787473642150189",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "9j6tr5RHsHmsb68AS2qy",
    name: "Studio Fusion",
    ownerName: "Cindy Cairo",
    ghlLocationId: "9j6tr5RHsHmsb68AS2qy",
    metaAccountId: "222298960395308",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "2hQ23pHWv522yLmuHKPl",
    name: "Studio J Dance Academy",
    ownerName: "Anna Marie Mellace",
    ghlLocationId: "2hQ23pHWv522yLmuHKPl",
    metaAccountId: "1074678039915275",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "ur0xVNdiOvqZcqJnQ23v",
    name: "Studio Move",
    ownerName: "Casey Hall",
    ghlLocationId: "ur0xVNdiOvqZcqJnQ23v",
    metaAccountId: "511330674641245",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "tGzAEWpBH4UdSt91i0Xs",
    name: "Studio VIA",
    ownerName: "Kimberly Johnson",
    ghlLocationId: "tGzAEWpBH4UdSt91i0Xs",
    metaAccountId: "718853507840612",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "gyKBewceF8CrwAWD2L0H",
    name: "Susan's Dance Academy",
    ownerName: "Susan Florkiewicz",
    ghlLocationId: "gyKBewceF8CrwAWD2L0H",
    metaAccountId: "1009535377628915",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "BuIlOqBpilWYvMpYKTRs",
    name: "Synergy Dance Academy",
    ownerName: "Tammie Moyer",
    ghlLocationId: "BuIlOqBpilWYvMpYKTRs",
    metaAccountId: "1304571497500001",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "v4IsfvPUIi5KDxwIGAS5",
    name: "The Broadway Originals",
    ownerName: "Angel Reed",
    ghlLocationId: "v4IsfvPUIi5KDxwIGAS5",
    metaAccountId: "904083281559698",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "TIsXjYT0wPlrVij1LbfP",
    name: "The Dance Network",
    ownerName: "Alex Giaccone",
    ghlLocationId: "TIsXjYT0wPlrVij1LbfP",
    metaAccountId: "1043454917267094",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "ecPqUsTbZlQmcaqv8jnb",
    name: "The Dance Slipper Academy",
    ownerName: "Julianne Wendzel",
    ghlLocationId: "ecPqUsTbZlQmcaqv8jnb",
    metaAccountId: "1036369054093493",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "7tS3lUkaItECcrtmc8Yq",
    name: "The Dancer's Edge",
    ownerName: "Traci Stiles",
    ghlLocationId: "7tS3lUkaItECcrtmc8Yq",
    metaAccountId: "2139137770661",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "Xa35NTeTyyLWNoNSXbCh",
    name: "The Demi Dance Academy",
    ownerName: "Samantha Sommers",
    ghlLocationId: "Xa35NTeTyyLWNoNSXbCh",
    metaAccountId: "530030230197652",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "juxd9I2cF5DVmLyxkE3p",
    name: "The EducateDancer Studio",
    ownerName: "Tisha Perry",
    ghlLocationId: "juxd9I2cF5DVmLyxkE3p",
    metaAccountId: "3947398395502286",
    accountManager: "Kelly Steffen",
    status: "Inactive"
  },
  {
    id: "PQKlgXwA2AZw1LzBOH5F",
    name: "The Pink Slipper Dance Studio",
    ownerName: "Michele Stewart",
    ghlLocationId: "PQKlgXwA2AZw1LzBOH5F",
    metaAccountId: "1240498987301471",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "akktHZMMBHrebQEcUtGr",
    name: "The Staten Island Strut Dance Complex",
    ownerName: "Daniel Montera",
    ghlLocationId: "akktHZMMBHrebQEcUtGr",
    metaAccountId: "1301041811748343",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "w2eFqEjqtXuuD4paXBK9",
    name: "The Tate Academy",
    ownerName: "Tabitha Bouldinq",
    ghlLocationId: "w2eFqEjqtXuuD4paXBK9",
    metaAccountId: "1735389123697694",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "IYs9HNWfy0bsEqRuApRb",
    name: "The Young Company",
    ownerName: "Jalyn Stough",
    ghlLocationId: "IYs9HNWfy0bsEqRuApRb",
    metaAccountId: "511897817075521",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "JIRLiwOjWXlDlJkIDspy",
    name: "TLC Dance Studio",
    ownerName: "Deborah Bowman",
    ghlLocationId: "JIRLiwOjWXlDlJkIDspy",
    metaAccountId: "2813250008842371",
    accountManager: "Katie Dunphy",
    status: "Inactive"
  },
  {
    id: "sy8yPnwbkl9xAmbg0L7A",
    name: "Toledo Met",
    ownerName: "Carolyn Savage",
    ghlLocationId: "sy8yPnwbkl9xAmbg0L7A",
    metaAccountId: "813362944361881",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "zaN4sJy1GsYrvrtSfngp",
    name: "TranscenDance Studios",
    ownerName: "Cait Jones",
    ghlLocationId: "zaN4sJy1GsYrvrtSfngp",
    metaAccountId: "350687074461283",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "jc7EVLPoWJ2lurgkPeKz",
    name: "Uplift Dance Project",
    ownerName: "Faith Gardner",
    ghlLocationId: "jc7EVLPoWJ2lurgkPeKz",
    metaAccountId: "821794070342693",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "EQOHM9qZzfURXeDddo11",
    name: "Visions Academy of Performing Arts",
    ownerName: "DEONNA SHAHEEN",
    ghlLocationId: "EQOHM9qZzfURXeDddo11",
    metaAccountId: "315088611839529",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "UzZenLPlChLvWbrCkyFV",
    name: "Woodbridge School of Dance",
    ownerName: "Barbara Vari",
    ghlLocationId: "UzZenLPlChLvWbrCkyFV",
    metaAccountId: "987986676683627",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "ADYTiu6vZu6g0llL55oa",
    name: "Woodbury Dance Center",
    ownerName: "Buffy Breen",
    ghlLocationId: "ADYTiu6vZu6g0llL55oa",
    metaAccountId: "1485290435507929",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "ozyl4hLF7koeRVoXEDkw",
    name: "ZD Dance Academy",
    ownerName: "Mone't Landis",
    ghlLocationId: "ozyl4hLF7koeRVoXEDkw",
    metaAccountId: "266676225610798",
    accountManager: "Kristian Altuve",
    status: "Active"
  },
  {
    id: "fOVVSKpRnkPj2xkOh6vS",
    name: "El Dorado Dance Academy",
    ownerName: "Mark Nash",
    ghlLocationId: "fOVVSKpRnkPj2xkOh6vS",
    metaAccountId: "1117544953695884",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "2gHdKwBps0ft5NcQzUjN",
    name: "Incite Dance Center",
    ownerName: "Kaitlin Webster",
    ghlLocationId: "2gHdKwBps0ft5NcQzUjN",
    metaAccountId: "1373133374465971",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "7dyldeOZ5MMeqkNf141h",
    name: "Miss Kim's",
    ownerName: "Kim Black",
    ghlLocationId: "7dyldeOZ5MMeqkNf141h",
    metaAccountId: "27180843161503066",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "w9Jx9eCaLmt1kWiROp0M",
    name: "Moss Performing Arts Academy",
    ownerName: "Holly Scheid",
    ghlLocationId: "w9Jx9eCaLmt1kWiROp0M",
    metaAccountId: "160777243",
    accountManager: "Kelly Steffen",
    status: "Active"
  },
  {
    id: "qA24p5sLF85dH5Tg3fpt",
    name: "Octorara Ballet School",
    ownerName: "Gwen Potter",
    ghlLocationId: "qA24p5sLF85dH5Tg3fpt",
    metaAccountId: "1245901664201241",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "HQCW6YWbgilZARj0QhsW",
    name: "Sunnyvale Dance Academy",
    ownerName: "Hannah Roberts",
    ghlLocationId: "HQCW6YWbgilZARj0QhsW",
    metaAccountId: "726505720409289",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "EF1ZKRjSZHlNAn6Azl46",
    name: "The Dance Collective",
    ownerName: "Erika Thompson",
    ghlLocationId: "EF1ZKRjSZHlNAn6Azl46",
    metaAccountId: "1720058645576021",
    accountManager: "Katie Dunphy",
    status: "Active"
  },
  {
    id: "RvPlKDkGwY71MotKpkKo",
    name: "District Dance Gaithersburg MD",
    ownerName: "Melissa Curling",
    ghlLocationId: "RvPlKDkGwY71MotKpkKo",
    metaAccountId: "1235605073884512",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "82jypwLAZRvQP9VgJGGt",
    name: "Maryland Dance Project",
    ownerName: "Jessica Naylon",
    ghlLocationId: "82jypwLAZRvQP9VgJGGt",
    metaAccountId: "2023182775210771",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "ne3TCmi34kr0gn1OdjdU",
    name: "Creative Connexions Performing Arts Center",
    ownerName: "Rhea Bowman",
    ghlLocationId: "ne3TCmi34kr0gn1OdjdU",
    metaAccountId: "454694707361285",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "duaSnmDEGcAo6kVlUqod",
    name: "Academy of Arts At January's",
    ownerName: "January Wolfe",
    ghlLocationId: "duaSnmDEGcAo6kVlUqod",
    metaAccountId: "1414298856860863",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "VucSIEwAemZdHukFvwbC",
    name: "Bare None Dance Company",
    ownerName: "Keisha Stewart",
    ghlLocationId: "VucSIEwAemZdHukFvwbC",
    metaAccountId: "2415898772182519",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "kAoEFJHFMZCJjEao0stx",
    name: "YES Dance Academy",
    ownerName: "Lanise Thomas",
    ghlLocationId: "kAoEFJHFMZCJjEao0stx",
    metaAccountId: "1608711133511213",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "v3IJc6M9kDXQQ2o5tpOF",
    name: "Ovation School of Dance LLC",
    ownerName: "Aylish Lynch",
    ghlLocationId: "v3IJc6M9kDXQQ2o5tpOF",
    metaAccountId: "843223418733675",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "MoylcN14Ox1GWfFDTbRD",
    name: "Dance LYFE",
    ownerName: "Jenee Salako",
    ghlLocationId: "MoylcN14Ox1GWfFDTbRD",
    metaAccountId: "975703139740946",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "uvC5yY4H8s72YLVt5INR",
    name: "Dance Arts Academy OC",
    ownerName: "Sakine Ibrahim",
    ghlLocationId: "uvC5yY4H8s72YLVt5INR",
    metaAccountId: "1692977938528834",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "SN0c8kWDuIHETSdXpTXV",
    name: "Studio Elite",
    ownerName: "Pam Russel",
    ghlLocationId: "SN0c8kWDuIHETSdXpTXV",
    metaAccountId: "1245433840982548",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "732DL9Yyll2OWiZNnbeD",
    name: "Abundance Dance",
    ownerName: "Nyra Williams",
    ghlLocationId: "732DL9Yyll2OWiZNnbeD",
    metaAccountId: "1857120091627910",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "in67JYHZuUTSoH9nI9Az",
    name: "Histown Dance & Performing Arts",
    ownerName: "Ken Farley",
    ghlLocationId: "in67JYHZuUTSoH9nI9Az",
    metaAccountId: "978385409642790",
    accountManager: "Jessica Kane",
    status: "Active"
  },
  {
    id: "UAuUYsQEc0YhdM4FSKm1",
    name: "Power of Dance",
    ownerName: "Elizabeth Powers",
    ghlLocationId: "UAuUYsQEc0YhdM4FSKm1",
    metaAccountId: "",
    accountManager: "",
    status: "Active"
  }
];

module.exports = { CLIENTS };
