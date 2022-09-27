const express= require("express")
require("dotenv").config()
const mongoose = require('mongoose');
const app =express()
const port=process.env.port || 8000
console.log(process.env.url)

   mongoose.connect(process.env.url).then(()=>console.log('data base connection')).catch((error)=>console.log(error))
 
 

 const { Schema } = mongoose;

 const personschema = new Schema({
   name: {type:String,required:true}, // String is shorthand for {type: String}
   age:Number,
  
   favoriteFood:[String]
 })
 const personmodel = mongoose.model('users', personschema);
/*  personmodel.create([{name:'youssef',email:"youe@gmail.com",favoriteFood:['orata','9arous'],},{name:'nidha',date:"08-03-2022"}], function (err, small) {
    if (err)  {return console.log(err)} else {return console.log('document')}
 }) */
/* const person = new personmodel({ name:'chabeen', taille:100 });
person.save(function (err) {
  if (err){ return console.log(err)}
  else
  {
    return console.log('saved')
  };
  // saved!
}); */
/* personmodel.findOne({ favoriteFood:['orata','9arous'] }, function (err, data) {
    if (err){
        return console.log(err)
    }
    else{
        console.log(data)
    }
}); */
personmodel.find( {name:'youssef'},function (err, data) {
  if (err){
      return console.log(err)
  }
  else{
      console.log(data)
  }})
/* personmodel.findByIdAndUpdate('6332dee66b37856228870aa6', { $set: { name: 'jason bourne' }},  (err,data)=>{
    if (err){
                return console.log(err)
            }
            else{
                console.log(data)
            }

}) */
/*   person.findOne({ favoriteFoods: 'pizza' }, function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  });  */
 
  //findone by id 
/*   person.findById({_id:"60d204b0966a6f2ee8b9103f"} ,function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  }); */
/*   person.findById({_id:"60d204b0966a6f2ee8b9103f"} ,function (err, doc) {
    if (err){
      console.log(err)
    } else { doc.favoriteFoods.push('hamburger');doc.save();
      console.log(doc)}
    
  }); */

/*   person.findOneAndUpdate({name:"fatma"}, { $set: { age: 20 }},{new:true}, function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  });  */

/*   person.findByIdAndRemove({_id:"60d2025670f1ef28b4da3973"}, function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  }); 
 */


/*   person.remove({name:"fatma"},function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  });  */

/*   person.find({favoriteFoods:'pizza'}).sort({name:1}).limit(2).select("-age").exec(done=(err, doc)=> {
    if (err){
      console.log(err)
    } else {console.log(doc)}
    }) */









app.listen(port,(error)=>error ? console.log(error) : console.log(`server is running on port ${port}`) )