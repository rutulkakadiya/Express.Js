const express = require('express');
const port = 1008;

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded())
app.use(express.static('public'))

let data = [
    {
        id: "1",
        image: "/Book1.jpg",
        title: "Saraswatichandra",
        writer: "Govardhanram Madhavram Tripathi",
        language: "Gujarati",
        price: "500",
    },
    {
        id: "2",
        image: "/Book2.webp",
        title: "Bhagavad Gita",
        writer: "Ved-Vyasa",
        language: "Gujarati",
        price: "500",
    },
    {
        id: "3",
        image: "/Book3.jpg",
        title: "Mahabharata",
        writer: "Ved-Vyasa",
        language: "Gujarati",
        price: "700",
    },
    {
        id: "4",
        image: "/Book4.jpeg",
        title: "Ramayana",
        writer: "Valmiki",
        language: "Gujarati",
        price: "600",
    },
    {
        id: "5",
        image: "/Book5.jpg",
        title: "Zen-Ek Anokhu Dishachihna",
        writer: "B.N. Dastoor",
        language: "Gujarati",
        price: "300",
    },
    {
        id: "6",
        image: "/Book6.jpg",
        title: "Zansini Rani Laxmibai",
        writer: "Kalpna Ganguly",
        language: "Gujarati",
        price: "500",
    },
    {
        id: "7",
        image: "/Book7.jpg",
        title: "Warren Buffett: Success Secrets",
        writer: "George Ilian",
        language: "Gujarati",
        price: "1,000",
    },
    {
        id: "8",
        image: "/Book8.webp",
        title: "Sundarkand",
        writer: "Tulsidas Goswami",
        language: "Hindi",
        price: "116",
    },
    {
        id: "9",
        image: "/Book9.webp",
        title: "The Greatest Salesman in the World",
        writer: "Mandino Og",
        language: "Hindi",
        price: "160",
    },
    {
        id: "10",
        image: "/Book10.webp",
        title: "Bharat Ka Samvidhan",
        writer: "Dr. BR Ambedkar",
        language: "Hindi",
        price: "332",
    },
    {
        id: "11",
        image: "/Book11.webp",
        title: "Panchatantra Ki 101 Kahaniyan",
        writer: "Wonder House",
        language: "Hindi",
        price: "116",
    },
    {
        id: "12",
        image: "/Book12.webp",
        title: "Mansarovar",
        writer: "Munshi Premchand",
        language: "Hindi",
        price: "197",
    },
    {
        id: "13",
        image: "/Book13.webp",
        title: "Trading in the Zone",
        writer: "Mark Douglas",
        language: "Hindi",
        price: "218",
    },
    {
        id: "14",
        image: "/Book14.webp",
        title: "Body Language",
        writer: "Allan Pease",
        language: "Hindi",
        price: "275",
    },
    {
        id: "15",
        image: "/Book15.webp",
        title: "Sanatana Dharma: An Elementry Text Book Of Hindi Religion And Ethics",
        writer: "Central Hindu College",
        language: "Hindi",
        price: "775",
    },
    {
        id: "16",
        image: "/Book16.webp",
        title: "The Shiva Sutras",
        writer: "Chaudhri Ranjit",
        language: "Hindi",
        price: "186",
    },
    {
        id: "17",
        image: "/Book17.webp",
        title: "Brahmacharya",
        writer: "Vivekananda Swami",
        language: "English",
        price: "344",
    },
    {
        id: "18",
        image: "/Book18.webp",
        title: "Shiv Charitra Aivam Chalisa",
        writer: "Ramesh Ji Maharaj Yogiraj Shri",
        language: "Hindi",
        price: "307",
    },
    {
        id: "19",
        image: "/Book19.webp",
        title: "Mahagatha",
        writer: "Nayak Satyarth",
        language: "English",
        price: "185",
    },
    {
        id: "20",
        image: "/Book20.jpg",
        title: "Hindu Padpadshahi",
        writer: "Vinayak Damodar Savarkar",
        language: "Hindi",
        price: "224",
    },
    {
        id: "21",
        image: "/Book21.webp",
        title: "Life's Amazing Secrets - Finding happiness",
        writer: "Das Gaur Gopal",
        language: "English",
        price: "206",
    },
    {
        id: "22",
        image: "/Book22.webp",
        title: "Ayodhya Ram Temple and Hindu Renaissance",
        writer: "Swamy Subramanian",
        language: "English",
        price: "595",
    },
    {
        id: "23",
        image: "/Book23.webp",
        title: "The Hindu Temple",
        writer: "Kramrisch Stella",
        language: "English",
        price: "4,000",
    },
    {
        id: "24",
        image: "/Book24.webp",
        title: "Karnataka's Rich Heritage",
        writer: "Lalit Chugh",
        language: "English",
        price: "1,110",
    },
    {
        id: "25",
        image: "/Book25.webp",
        title: "Dharmakshetre Kurukshetre",
        writer: "Dandekar Vishwas",
        language: "Hindi",
        price: "378",
    },
    {
        id: "26",
        image: "/Book26.webp",
        title: "Kalayan Sri Hanuman Ank Parishista Ank Sahit",
        writer: "Gita Press",
        language: "Hindi",
        price: "333",
    },
    {
        id: "27",
        image: "/Book27.webp",
        title: "Cave Temples of India",
        writer: "Dr. Mrs. Dulari Qureshi    ",
        language: "Hindi",
        price: "5,500",
    },
    {
        id: "28",
        image: "/Book28.webp",
        title: "Hinglaj Devi",
        writer: "Jurgen Schaflechner",
        language: "English",
        price: "333",
    },
    {
        id: "29",
        image: "/Book29.webp",
        title: "Sundar Kanda",
        writer: "Saraswati Swami Satyananda",
        language: "English",
        price: "506",
    },
    {
        id: "30",
        image: "/Book30.webp",
        title: "Account of the Temple of Jagannath: Lord of the World",
        writer: "Rajendralala Mitra et al.",
        language: "Hindi",
        price: "382",
    },

]

app.get("/", (req, res) => {
    res.render("bookStore", { data })
})

app.post("/addData", (req,res)=>{
    req.body.id = String(Date.now())
    data.push(req.body);
    res.redirect("/");
})

app.get("/editData/:id", (req,res)=>{
    let singleData = data.find((item)=> item.id == req.params.id);
    console.log(singleData);
    
    res.render("editBooks", {singleData})
    
})

app.post("/updateData",(req,res)=>{
    data.map((e,i)=>{
        if(e.id == req.body.id){
            e.id = req.body.id;
            e.title = req.body.title;
            e.writer = req.body.witer;
            e.price = req.body.price;
            e.language = req.body.language;
        }
    })
    res.redirect("/")
});

app.get("/deleteData", (req,res)=>{
    console.log(req.query);
    let deleteData = data.filter((item)=> item.id != req.query.id);
    data = deleteData
    res.redirect("/");
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server");
})