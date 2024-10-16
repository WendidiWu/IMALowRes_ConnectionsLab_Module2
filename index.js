let express = require('express');
let app = express();

let colors = {
    "colors": [
      {
        "name": "Neon Pink",
        "rgb": { "r": 255, "g": 20, "b": 147 },
        "category": "Warm",
        "usage": "Bold expressions, playfulness, and excitement"
      },
      {
        "name": "Electric Blue",
        "rgb": { "r": 125, "g": 249, "b": 255 },
        "category": "Cool",
        "usage": "Futuristic designs, energy, and creativity"
      },
      {
        "name": "Lime Green",
        "rgb": { "r": 50, "g": 205, "b": 50 },
        "category": "Cool",
        "usage": "Nature, vitality, and growth"
      },
      {
        "name": "Sunshine Yellow",
        "rgb": { "r": 255, "g": 223, "b": 0 },
        "category": "Warm",
        "usage": "Happiness, optimism, and warmth"
      },
      {
        "name": "Teal",
        "rgb": { "r": 0, "g": 128, "b": 128 },
        "category": "Cool",
        "usage": "Calmness, sophistication, and balance"
      },
      {
        "name": "Fuchsia",
        "rgb": { "r": 255, "g": 0, "b": 255 },
        "category": "Warm",
        "usage": "Confidence, creativity, and vibrancy"
      },
      {
        "name": "Bright Orange",
        "rgb": { "r": 255, "g": 165, "b": 0 },
        "category": "Warm",
        "usage": "Energy, enthusiasm, and action"
      },
      {
        "name": "Turquoise",
        "rgb": { "r": 64, "g": 224, "b": 208 },
        "category": "Cool",
        "usage": "Balance, calmness, and healing"
      },
      {
        "name": "Scarlet Red",
        "rgb": { "r": 255, "g": 36, "b": 0 },
        "category": "Warm",
        "usage": "Passion, intensity, and love"
      },
      {
        "name": "Vivid Purple",
        "rgb": { "r": 159, "g": 0, "b": 255 },
        "category": "Cool",
        "usage": "Mystery, luxury, and imagination"
      }
    ]
  }


// app.get('/',(request, response)=> {
//     response.send("This is the main page");
// })
app.use('/', express.static('public'));

app.get('/about',(request,response)=>{
    response.send("This is an about page");
})

app.get('/colors', (request, response) =>{
    response.json(colors);
})

app.get('/colors/:color',(request, response)=>{
    console.log(request.params.color);
    let user_color= request.params.color;
    let user_obj;
    for(let i=0; i<colors.colors.length; i++){
        if(user_color == colors.colors[i].name){
            user_obj = colors.colors[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        response.json(user_obj);
    } else{
        response.json({status:"info not present"});
    }
})

app.listen(3000,() =>{
    console.log("app is listening at localhost:3000");
})
