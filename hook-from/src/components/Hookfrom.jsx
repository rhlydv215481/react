import {useForm} from 'react-hook-form';

const Hookfrom = () => {
    const {register,handleSubmit,reset,formState:{ errors},watch} = useForm();
    const onSubmit = (e) => {
  console.log(e);
    reset();
};
 const nameValue = watch("hello");
    //  const form = useForm();   // 👈 destructuring hata di, poora object liya
  return (
    <form onSubmit= {handleSubmit(onSubmit)} >
         <input type="text" {...register("hello",{required: "ye khali hai"})} placeholder='hello'  />
        {errors.hello && <span>{errors.hello.message} </span>}
        <p >Tumne likha: {nameValue}</p>
         <input type='text' {...register("gmail",{pattern : { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "plz enter valied formated"}} )} />
      <input type="text" {...register("age", { required: "Name required", min:{
        value: 10,
        message: " minim 10 hona chhya "
      },
      max :
      {
        value:20,
        message: " max 20 hai"
      } 
      })} />
       {errors.age && <span>{errors.age.message} </span>}
      <button type='submit'>submited</button>
    </form>
    
  )
}

export default Hookfrom
