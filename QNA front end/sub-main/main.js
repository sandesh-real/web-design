
/************************************all variable decleration******************************** */
var optNum=0
var countListElemet=0;
var onetag;
var twotag;
var checkedValue=0;
var tagArr=[];
var questionImage='';

/*************************************img show*****************************************/
    document.querySelector(".image-box").addEventListener('change',(e)=>{
    document.querySelector('.img-show').classList.add('img-show-hide');
     var reader=new FileReader();
     var imageField=document.querySelector('#image-field');
     reader.onload=function()
     {
         if(reader.readyState==2)
         {
             imageField.src=reader.result;
             questionImage=reader.result;
         }
     }
     reader.readAsDataURL(e.target.files[0]);
        
    });

    /****************************add tag javascript*************************************/

document.querySelector('.tag-selected-lists').addEventListener('click',(e)=>{

    if(e.target.tagName=="LABEL")
    {
        targetName=`#${e.target.parentNode.firstChild.id}`;
       
    }
    else{
     targetName=`#${e.target.id}`;
    
    }
   
   
    var tagValue=document.querySelector(targetName);
  
    if(tagValue.checked)
    {
        if(e.target.tagName=="LABEL")
        {
            checkedValue--;
        }
       checkedValue++;
   
       
    }
    else if(!tagValue.checked)
    {
        if(e.target.tagName=="LABEL")
        {
            checkedValue++;
           
        }
        checkedValue--;
      
    }
    if(checkedValue==2)
    {
        var s=document.querySelectorAll('.tag-checkedBox');
        s.forEach((e)=>{
            if(!e.checked)
            {
                e.disabled=true;
            }
        });
    }
    if(checkedValue<2)
    {
        var s=document.querySelectorAll('.tag-checkedBox');
        s.forEach((e)=>{
            if(!e.checked)
            {
                e.disabled=false;
            }
        });
    }
});






/*************************************add question javascript*****************************88 */
var toggleFunction = ()=>{
          
    document.querySelector('.popup').classList.toggle('select');
}
document.querySelector('.popup').addEventListener('click',(e)=>{
if(e.target.className!="question-form" && e.target.tagName!="SELECT" && e.target.tagName!="LABEL" && e.target.tagName!="INPUT" && e.target.className!="add-tag-btn" && e.target.tagName!="BUTTON" && e.target.tagName!="I")
{
    document.querySelector('.popup').classList.remove('select');
}


});


/************************************add question after click btn******************************* */

var element=document.querySelector('#question-btn');

 element.addEventListener('click',toggleFunction);
  document.querySelector('.close').addEventListener('click',toggleFunction);


document.querySelector('#add-question-btn').addEventListener('click',()=>{

    var question_input= document.querySelector('.question-input-section').value;

    var parentDiv=document.querySelector('.question-box').parentNode;
    optNum=parentDiv.childElementCount+1;


    /****************************add tag javascript*************************************/
    var arr=[];
    var tagValue=document.querySelectorAll('.tag-checkedBox');
    tagValue.forEach((elm)=>{
        if(elm.checked)
        {
            arr.push(elm.value);
        }
        
    });
   
    
 

  
  if(question_input=="" || (arr[0]=="" && arr[1]==""))
  {
      alert("khali na xoda, Please");
  }
 else{
  var newNode=`

  <div class="question-box">
  <div class="questions" id="questions">
      <div class="top-part">
      <p class="recommend-text">Recommendate For You</p>
      <div class="more-option">
          <button class="option-anchor opt-${optNum}">
           <div class="cir-1"></div>
           <div class="cir-2"></div>
           <div class="cir-3"></div>
       </button>
       <div class="more-option-container-${optNum} for-all-option">
       <div class="more-option-second-container">
       <a href="#">delete</a>
       <a href="#">report</a>
   </div>
   </div>
       </div>
      </div>
      <h1 class="question-text">This is just a demo, Quetion is added in Your Question section using backend!!!<a href="#" class="question-more-tag">(more)</a></h1>`
     + ((questionImage)?`<div class="question-image">
                        <img src="${questionImage}" alt="fsdfds" >

                    </div>
                    <div class="small-detail">
          <p>Answered, Aug-4,2020</p>
          <div class="tags">`+(arr.length<2?`<a href="#" class="first-tag">${arr[0]}</a>
      </div>
  </div>
  <div class="answer-btn-container">
  <a href="../viewAnswer/index.html" class="answer-btn" style="text-align: center;">VIEW ANSWER</a>
</div>
</div>

</div>`:    `<a href="#" class="first-tag">${arr[0]}</a>
<a href="#" class="second-tag">${arr[1]}</a>
</div>
</div>
<div class="answer-btn-container">
<a href="../viewAnswer/index.html" class="answer-btn" style="text-align: center;">VIEW ANSWER</a>
</div>
</div>

</div>`):`<div class="small-detail">
    <p>Answered, Aug-4,2020</p>
    <div class="tags">`+(arr.length<2?`<a href="#" class="first-tag">${arr[0]}</a>
</div>
</div>
<div class="answer-btn-container">
<a href="../viewAnswer/index.html" class="answer-btn" style="text-align: center;">VIEW ANSWER</a>
</div>
</div>

</div>`:    `<a href="#" class="first-tag">${arr[0]}</a>
<a href="#" class="second-tag">${arr[1]}</a>
</div>
</div>
<div class="answer-btn-container">
<a href="../viewAnswer/index.html" class="answer-btn" style="text-align: center;">VIEW ANSWER</a>
</div>
</div>

</div>`));
  console.log(newNode);
  parentDiv.insertAdjacentHTML('afterbegin',newNode);

  var question_input= document.querySelector('.question-input-section').value="";
  tagValue.forEach((elm)=>{
    if(elm.checked)
    {
        elm.checked=false;
     
    }
    elm.disabled=false;

    
});
checkedValue=0;
document.querySelector('.img-show').classList.remove('img-show-hide');
  toggleFunction();


 }
  });


  /*****************************more option buton***************************************/
 
document.querySelector('body').addEventListener('click',(e)=>{
  
    var num;
  if((e.target.className=='cir-1'||e.target.className=='cir-2'||e.target.className=='cir-3'))
  {
      //*******yo more option bata tesko number nikaleko************* */
      num=e.target.parentNode.className.substring(('option-anchor opt-').length,e.target.parentNode.className.length);
  
  }
  else{
    num=e.target.className.substring(('option-anchor opt-').length,e.target.className.length);
  } 

//   e.target.tagName!='A'&& ///// future use for delete and report click;
//you more option ko box ho jun tyo box ra button bahek aru click gare close hunx
  if( e.target.id!='classMoreOption'&&((e.target.className!='cir-1'&&e.target.className!='cir-2'&&e.target.className!='cir-3') &&e.target.className!=`option-anchor opt-${num}`))
  {

      document.querySelectorAll(`.for-all-option`).forEach((elm)=>{
        elm.classList.remove('more-option-active');
      });
  }
  
  
      if((e.target.className=='cir-1'||e.target.className=='cir-2'||e.target.className=='cir-3') ||e.target.className==`option-anchor opt-${num}`)
       {
        
          var moreOption=document.querySelector(`.more-option-container-${num}`);
        
             moreOption.classList.toggle('more-option-active');
       }
    
  });
 
 
   

/******************************nav js for responsive design******************************/


  document.querySelector('.small-nav').addEventListener('click',()=>{
    document.querySelector('.nav-container').classList.toggle('main__nav--lists-click');
    });
    
    
 /**********************************js for sidebar opner and closer*********************/

document.querySelector('.sidebarOpener').addEventListener('click',()=>{
document.querySelector('aside').classList.add('aside-opener');
document.querySelector('.sidebarOpener').classList.add('siderbarOpenerFixed');
});

document.querySelector('.sidebarCloser').addEventListener('click',()=>{
    document.querySelector('aside').classList.remove('aside-opener');
    document.querySelector('.sidebarOpener').classList.remove('siderbarOpenerFixed');
    });