var element = document.getElementById('venlogin');
element.innerHTML = `
<!-- booking details -->
<div class="space-70"></div>
    <!--booking end  -->


    <!-- model start -->
 

    <div class="modal" id="loginmodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-full" role="document">
            <div class="modal-content ">
                <div class="modal-header mdl col-md-6">
                  
                    <h1 class="modal-title ">
                      Login</h1>
                   
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <h3><span aria-hidden="true"><i class="fas fa-times-circle"></i></span></h3>
                    </button>
                    
                </div>
                <div class="col-md-6 mdl " style="size: 5px;" >
                
               <hr style="height:1px;border:none;color:#333;background-color:#333;" />
               <form>
           <br>
                  <div class="">
        <div class="row text-left">
         
          <div class="form-group col-md-12 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">Email Address</label>
            <input type="email" id = 'email' class="form-control inputborder" id="inputPassword4">        
          
          </div>
          <div class="form-group col-md-12 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">password</label>
            <input type="password" id = 'pass' class="form-control inputborder" id="inputPassword4">        
          
          </div>
        </div>
       
        <a href="#forgetmodal"  data-dismiss="modal" data-toggle='modal'>forget password?</a>
        </br>
        <a href="#createaccountmodal" data-dismiss="modal"  data-toggle='modal'>create account?</a>
        

        <a style=" text-decoration: none; " class="btn btn-primary col-md-12" href="#"onclick = 'login()' >Login</a> 




    </div>
    
     
    
 
  
      </form>
   



                </div>
           
            </div>
        </div>

    </div> <!-- model end -->
    


    <!-- booking details -->
<div class="space-70"></div>
    <!--booking end  -->


    <!-- model start -->
 

    <div class="modal" id="createaccountmodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-full" role="document">
            <div class="modal-content ">
                <div class="modal-header mdl col-md-6">
                  
                    <h1 class="modal-title ">
                      signup</h1>
                   
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <h3><span aria-hidden="true"><i class="fas fa-times-circle"></i></span></h3>
                    </button>
                    
                </div>
                <div class="col-md-6 mdl " style="size: 5px;" >
                
               <hr style="height:1px;border:none;color:#333;background-color:#333;" />
               <form>
           <br>
                  <div class="">
        <div class="row text-left">
         
          <div class="form-group col-md-12 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">Full Name</label>
            <input type="text" id='name' class="form-control inputborder" id="inputPassword4">        
          
          </div>
          <div class="form-group col-md-12 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">Email Address</label>
            <input type="email" id = 'usemail' class="form-control inputborder" id="inputPassword4">        
          
          </div>
          <div class="form-group col-md-12 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">password</label>
            <input type="password" id='uspass' class="form-control inputborder" id="inputPassword4">        
          
          </div>
          <div class="form-group col-md-12 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
          <label for="inputPassword4">confirm password</label>
          <input type="password" class="form-control inputborder" id="inputPassword4">        
        
        </div>
        </div>
       
        <a href="#forgetmodal"  data-dismiss="modal" data-toggle='modal'>forget password?</a>
        </br>
        <a href="#loginmodal" data-dismiss="modal"  data-toggle='modal'>Login</a>
        <a style=" text-decoration: none; " class="btn btn-primary col-md-12" href="#"onclick = 'register()' >Signup</a> 





    </div>
    
     
    
 
  
      </form>
   



                </div>
           
            </div>
        </div>

    </div> <!-- model end -->


    
<!-- booking details -->
<div class="space-70"></div>
    <!--booking end  -->


    <!-- model start -->
 

    <div class="modal" id="forgetmodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-full" role="document">
            <div class="modal-content ">
                <div class="modal-header mdl col-md-6">
                  
                    <h1 class="modal-title ">
                      Reset password</h1>
                   
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <h3><span aria-hidden="true"><i class="fas fa-times-circle"></i></span></h3>
                    </button>
                    
                </div>
                <div class="col-md-6 mdl " style="size: 5px;" >
                
               <hr style="height:1px;border:none;color:#333;background-color:#333;" />
               <form>
           <br>
                  <div class="">
        <div class="row text-left">
        
         
          <div class="form-group col-md-12 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">Enter your Email to reset</label>
            <input type="email" class="form-control inputborder" id="inputPassword4">        
          
          </div>
         
          
        
        
        </div>
        </div>
        </br>
        <a href="#createaccountmodal" data-dismiss="modal"  data-toggle='modal'>create account?</a>
        </br>
        <a href="#loginmodal" data-dismiss="modal"  data-toggle='modal'>login</a>

        <a style=" text-decoration: none; " class="btn btn-primary col-md-12" href="#" >Reset</a> 


        


    </div>
    
     
    
 
  
      </form>
   



                </div>
           
            </div>
        </div>

    </div> <!-- model end -->



    

`

