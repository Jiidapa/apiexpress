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

    /* ฟังก์ชันสำหรับหา user จาก id ในส่วนนี้เราจะวน loop หา users ที่มี id ตามที่ระบุแล้วส่งกลับไป */
    exports.findById = function (id) {
        for (var i = 0; i < detail_site.length; i++) {
            if (detail_site[i].site_id == id) return detail_site[i];
        }
    };
