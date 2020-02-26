function add(x,y){
  if((typeof x)==='number'&&(typeof y)==='number'){
    return x + y;
  }
  return NaN;
}
module.exports=add;