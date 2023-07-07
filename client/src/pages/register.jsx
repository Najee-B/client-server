import React from 'react'
import styled from 'styled-components'
import img from '../assets/arrow.png'

const Containers=styled.div`

    background: linear-gradient(to right,#f57c03,#ffb11f);
    display: flex;
    height:100vh;
    flex-direction: row;
    margin: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 200px;
    
  
  .left{
    
    display: flex;
    flex-direction: column;
    justify-content:center;
    color: white;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
    align-items: center;
    font-family: Arial;
    margin-left: 60px;
    width: 300px;
  }
  .right{
    background-color: white;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 50px 0px 0px 50px;
    width: 550px;
    height: 350px;
    margin-top:250px;
    padding-left: 10px;
    padding-right: 50px;
    font-family: Arial;
    color: black;
  }
  .lb{
    margin-bottom: 25px;

  }
  form{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 400px;
  }
  .tbox{
    margin: 80px 10px 30px 0px;
    padding-top: 7px;
    display: flex;
    flex-direction: column;
    width: 100px;
    font-weight: bolder;
  }
  h2{
    color: black;
    margin-left: 0px;
  }
  .in{
    color: black;
    margin-left: 10px;
    margin-top: 10px;
    height: 20px;
    width: 400px;
    margin-bottom: 10px;
    background-color: aliceblue;
  
  }
  .about{
    background-color: white;
    border-radius: 50px;
    color: black;
    width: 80px;
    height: 30px;
    border: none;
    font-size: 10px;
    margin-top: 10px;
   
    
  }
  .register{
    background-color: orange;
    color: white;
    margin: 10px 10px 20px auto;
    border-radius: 50px;
    border: none;
    width: 100px;
    height: 40px;
  }
  p{
    
    font-size: 15px;
    margin-top: 0px;
  }
  .triangle{
    width: 80px;
    height: 80px;
  }
  img{
    width: 60px;
    height: 60px;
  }
  @media only screen and (max-width:600px) {
    padding-left:0px;
    flex-direction:column;
    .left{
        margin: auto auto 0px auto;
    }
    .right{
        margin: 10px auto auto auto;
        width:300px;
        height: 250px;;
        margin-top:10px;
    }
    form{
        width:200px;
    }
    .in{
        width: 150px;
        margin-top:0px;
        margin-top:0px;
    }
    .lb{
        margin-bottom:10px;
    }
    .tbox{
        margin-top:65px;
    }
    img{
        width: 30px;
        height: 30px;
    }
    .triangle{
        width:40px;
        height: 40px;
    }
    
  }
`;
function register() {
  return (
    <>
    <Containers>
      <div class="left">
        <div class="triangle"><img src={img} alt=""></img></div>
        <h3>Join Us</h3>
       <p> Subscribe Easy Tutorials YouTube Channel towatch more videos</p>
        <input type="button" class="about" value="About Us" ></input>
    </div>
    <div class="right">
      <form>
         <h2>Register Here</h2>
        <input type="text" class="in" id="name" placeholder="Name" pattern="[A-Za-z\s]{2,}"
         title="Name can only contain alphabets" required></input>
        <input type="text" class="in" id='uname' placeholder="Username" pattern="[A-Za-z0-9\-\@\.\#]{5,10}" 
        title="Username should be atleast 5 character and maximum 10 character"></input>
        <input type="text" class="in" id='email' placeholder="Email" pattern="[a-zA-Z0-9\-]{4,10}[@][a-z]+[\.][a-z]{2,3}" 
        title="Enter valid email format" required></input>
        <input type="password" class="in" id='pass' placeholder="Password" pattern="[a-zA-Z0-9\@\-\.\$]{8}"
         title="Passwod should be 8 letter long" required></input>
        <input type="submit" class="register" value="Register"></input>
        </form>
    <div className="tbox">
        <label for="name" className='lb'>Name:</label>
        <label className='lb' for="uname">User Name:</label>
        <label className='lb' for="email">Email:</label>
        <label className='lb' for="pass">Password:</label>
        </div> 
    </div>
    </Containers>
    </>
  )
}

export default register