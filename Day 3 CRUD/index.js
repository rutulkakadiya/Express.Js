const express = require('express');
const port = 5000;

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded())

let data = [
    {
        id: "1",
        image: "/Images/iphone1.webp",
        title: "Apple iPhone 15 (Black, 128 GB)",
        price: "6099",
        category: "Mobile",
        discountPrice: "699000",
        discount: "12",
    },
    {
        id: "2",
        image: "/Images/samsung4.webp",
        title: "SAMSUNG Galaxy A15 5G (Blue Black, 128 GB) (8 GB RAM)",
        price: "15999",
        category: "Mobiles",
        discountPrice: "21499",
        discount: "2"
    },
    {
        id: "3",
        image: "/Images/Laptop9.webp",
        title: "HP Victus AI Powered AMD Ryzen 7 Octa Core 7840HS",
        category: "Laptop",
        price: "78990",
        discountPrice: "96136",
        discount: "17"
    },
    {
        id: "4",
        image: "/Images/TV8.webp",
        title: "SONY Bravia X74L 138.8 cm (55 inch) Ultra HD (4K)",
        category: "TV",
        price: "54990",
        discountPrice: "99000",
        discount: "44"
    },
    {
        id: "5",
        image: "/Images/Watch7.webp",
        title: "Noise Pro 5 1.85 AMOLED Always-on Display (Rose Gold Strap, Regular)",
        category: "Watches",
        price: "4099",
        discountPrice: "9999",
        discount: "59"
    },
    {
        id: "6",
        image: "/Images/samsung2.webp",
        title: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB) (12 GB RAM)",
        price: "129999",
        category: "Mobile",
        discountPrice: "1349000",
        discount: "3",
    },
    {
        id: "7",
        image: "/Images/airpod7.webp",
        title: "boAt Airdopes 161 Pro-Buds (Green Cyan, True Wireless)",
        category: "Airdopes",
        price: "1199",
        discountPrice: "4490",
        discount: "73"
    },
    {
        id: "8",
        image: "/Images/Laptop10.webp",
        title: "ASUS Vivobook S 15 OLED Powered, Intel EVO H Series",
        category: "Laptop",
        price: "106990",
        discountPrice: "122990",
        discount: "13"
    },
    {
        id: "9",
        image: "/Images/Watch8.webp",
        title: "boAt Enigma Orion Luxury Series (Metallic Silver Strap, Free Size)",
        category: "Watches",
        price: "2699",
        discountPrice: "8999",
        discount: "70"
    },
    {
        id: "10",
        image: "/Images/google1.webp",
        title: "Google Pixel 9 (Porcelain, 256 GB)  (12 GB RAM)",
        category: "Mobiles",
        price: "79999",
        discountPrice: "85999",
        discount: "12"
    }
]

app.get("/", (req, res) => {
    res.render("index", { data });
})

app.post("/addData", (req, res) => {
    req.body.id = String(data.length + 1)
    data.push(req.body);
    res.redirect("/");
})

app.get("/deleteData", (req,res)=>{
    let singleData = data.filter((item)=>item.id !== req.query.id);
    data = singleData;
    res.redirect("/");
});

app.get("/editData/:id" ,(req,res)=>{
    let editData = data.find((item)=> item.id == req.params.id);
    res.render("edit", {editData})
})

app.post("/updateData", (req,res)=>{
    data.map((e,i)=>{
        if(e.id == req.body.id){
            e.id == req.body.id;
            e.category = req.body.category;
            e.title = req.body.title;
            e.price = req.body.price;
        }
        else{
            e
        }
    })
    res.redirect("/");
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started");
})