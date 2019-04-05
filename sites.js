/* ลองใส่ข้อมูลเล่นๆ เพื่อเอาไว้เทส */
var sites = [
    {
        "site_id" : "1",
        "site" : "MIMO"
    },
    {
        "site_id": "2",
        "site": "SCB"
    },
    {
        "site_id": "3",
        "site": "BOT"
    },
    {
        "site_id": "4",
        "site": "KBANK"
    },
    {
        "site_id": "5",
        "site": "UOB"
    },
    {
        "site_id": "6",
        "site": "RCL"
    },
    {
        "site_id": "7",
        "site": "Office"
    },{
        "site_id": "8",
        "site": "K-Sec"
    },
    {
        "site_id": "9",
        "site": "SEC"
    },
    {
        "site_id": "10",
        "site": "BAY"
    },{
        "site_id": "11",
        "site": "TMB"
    },
    {
        "site_id": "12",
        "site": "MEA"
    },
    {
        "site_id": "13",
        "site": "HPC"
    },
    {
        "site_id": "14",
        "site": "SCG"
    },
    {
        "site_id": "15",
        "site": "REAL MO"
    },
    {
        "site_id": "16",
        "site": "TG"
    },
    {
        "site_id": "17",
        "site": "Thales"
    },
    {
        "site_id": "18",
        "site": "Central JD"
    },
    {
        "site_id": "19",
        "site": "KBTG"
    }
];
     
var detail_site = [
    {
        "site_id" : "2",
        "site_name" : "The Siam Commercial Bank Public Company Limited",
        "site_address" : "9 ถนนรัชดาภิเษก แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร",
        "site_tel" : "02-777-7777",
        "site_web" : "https://www.scb.co.th",
        "site_img" : ""
    },
    {
        "site_id": "4",
        "site_name": "Kasikorn Bank (ธนาคารกสิกรไทย)",
        "site_address": "Soi Rat Burana 27/1, Rat Burana Road, Rat Burana Sub-district, Rat Burana Distrct, Bangkok 10140",
        "site_tel": "02-888-8888",
        "site_web": "https://www.kasikornbank.com",
        "site_img": "https://www.img.in.th/images/8b7bc4940ff2de5a2fcc5465ff3198a1.jpg"
    }
];

var contract = [
    {
       
        "site_id": 4,
        "contract": [
            {
                "contract_id": 1,
                "contract_no": "A18-8123",
                "contract_start": "2019-01-01",
                "contract_end": "2019-03-01",
                "contract_des": "เลขสัญญาจัดจ้างระบบสารสนเทศ ครั้งที่ 1 ประจำปี 2562",
            },
            {
                "contract_id": 2,
                "contract_no": "A18-8124",
                "contract_start": "2019-03-02",
                "contract_end": "2019-05-01",
                "contract_des": "เลขสัญญาจัดจ้างระบบสารสนเทศ ครั้งที่ 2 ประจำปี 2562",
            },
            {
                "contract_id": 3,
                "contract_no": "A18-8125",
                "contract_start": "2019-05-02",
                "contract_end": "2019-08-01",
                "contract_des": "เลขสัญญาจัดจ้างระบบสารสนเทศ ครั้งที่ 3 ประจำปี 2562",
            },
            {
                "contract_id": 4,
                "contract_no": "A18-8126",
                "contract_start": "2019-08-02",
                "contract_end": "2019-12-31",
                "contract_des": "เลขสัญญาจัดจ้างระบบสารสนเทศ ครั้งที่ 4 ประจำปี 2562",
            }
        ]
    }
];

    exports.findMasterAll = function() {
        return sites;
    };
     
    exports.findDetailSiteById = function (id) {
        for (var i = 0; i < detail_site.length; i++) {
            if (detail_site[i].site_id == id) return detail_site[i];
        }
    };

    exports.findContractById = function (id) {
        for (var i = 0; i < contract.length; i++) {
            if (contract[i].site_id == id) return contract[i];
        }
    };
