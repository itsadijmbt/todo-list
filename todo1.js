const sectionIncomplete=document.querySelector('.section-1');
const sectionComplete=document.querySelector('.section-2');
const mainBody=document.querySelector('.main-body');
const addNewTask=document.querySelector('.add-new-task');
const deleteTask=document.querySelector('.delete-task');
const form= document.querySelector('.form')
const addNewTaskInForm=document.querySelector('.add-in-form');
const cancelNewTaskInForm=document.querySelector('.cancel-in-form');
const upArrow = document.querySelector('.uparrow');
const buttonCollection = document.querySelector('.button-collection');
const taskName = document.querySelector('.task-name');
const dateTask =document.querySelector('.date-task');
let timeTask=document.querySelector('.time-task');
const sortTaskBtn=document.querySelector('.sort-task');
const Complete = document.querySelector('.complete');

const Incomplete = document.querySelector('.incomplete');


const P1=document.querySelector('.p1');
const P2=document.querySelector('.p2');
const P3=document.querySelector('.p3');

Complete.addEventListener('click',()=>{
  sectionIncomplete.style.display='none'
  
  renderSection_2();  
})

Incomplete.addEventListener('click',()=>{

  sectionComplete.innerHTML='';

  sectionIncomplete.style.display='block';
  sectionComplete.style.display='none';

})


P1.addEventListener('click',()=>{
  priority='lightcoral';
});
P2.addEventListener('click',()=>{
  priority='lightgreen';
});
P3.addEventListener('click',()=>{
  priority='lightskyblue';
});

let data =[];
let datalistp1=[];
let datalistp2=[];
let datalistp3=[];
let sorttype=true;
let priority;
let k=0;
let DeleteLIST;
let arrayCompleted=[];




addNewTask.addEventListener('click',()=>{
  mainBody.style.filter ='blur(10px)';
  form.style.display='flex';
  buttonCollection.style.display='flex';
  upArrow.style.display='none';

});
upArrow.addEventListener('click',()=>{
  buttonCollection.style.display='flex';
  upArrow.style.display='none';
  
})

cancelNewTaskInForm.addEventListener('click',backtoMAIN);

function backtoMAIN(){
  mainBody.style.filter ='blur(0px)';
  form.style.display='none';
  buttonCollection.style.display='flex';
  upArrow.style.display='none';
};

buttonCollection.addEventListener('click',()=>{
buttonCollection.style.display='none';
upArrow.style.display='inline-block';
});

function dataObjFeeder(){

  const taskNameInObj=taskName.value;
  const dateTaskInObj=dateTask.value;
  const timeTaskInObj=timeTask.value;
  const dateInfo=dateTaskInObj.split('-',3);
  const dateInfoID=(dateInfo[0]-1)*365+(dateInfo[1]-1)*30+dateInfo[2];
  const timeInfo = timeTaskInObj.split(':',2);
  const timeInfoID=timeInfo[0]+timeInfo[1];
  
//  console.log(dateInfoID);
//
//  console.log(timeInfoID);
  
  const objData ={

    objName:taskNameInObj,
    objDate:dateTaskInObj,
    objtime:timeTaskInObj,
    objpriority:priority,
    objDateInfo:parseInt(dateInfoID),
    objTimeInfo:parseInt(timeInfoID),

  };

  if(objData.objpriority==='lightcoral')
  datalistp1.push(objData);
  else if(objData.objpriority==='lightgreen')
  datalistp2.push(objData);
  else if(objData.objpriority==='lightskyblue')
  datalistp3.push(objData);
  
  data.push(objData);
  
  priority='';
   
}

function sortAndRenderT2(){
  sectionIncomplete.style.backgroundColor='gray';


  console.log('it works T2');
  console.log(data);
  

  data.sort((a,b)=>{
    return a.objDateInfo - b.objDateInfo
   }); 

   for(const i of data)
   {

      completedTask= document.createElement('button');
      const dataInSection1 = document.createElement('div');
      dataInSection1.className='data-section-1';
      
      dataInSection1.innerHTML=`
      <div class="info-in-task">
     <h1>${i.objName}</h1>
     <h1>${i.objDate}</h1>
     <h1>${i.objtime}</h1>
     </div>
   
      `;
   
      dataInSection1.style.backgroundColor=i.objpriority;
      dataInSection1.style.width='100%'
      dataInSection1.style.opacity='.8';
      completedTask.className='completed';
      completedTask.textContent='Completed';
      dataInSection1.append(completedTask);
      sectionIncomplete.append(dataInSection1);

   
      completedTask.addEventListener('click',()=>{
   
  
       const indexInData = data.indexOf(i);
      
       arrayCompleted.push(data[indexInData]);
       data.splice(indexInData,1);

       sectionIncomplete.innerHTML='';
       sortAndRenderT2();
       

      const inp1=datalistp1.indexOf(i);
      const inp2=datalistp2.indexOf(i);
      const inp3=datalistp3.indexOf(i);
      
  
      console.log("************")

      console.log(inp1)
      console.log(inp2)
      console.log(inp3)

      if(inp1>=0)
      {
        datalistp1.splice(inp1,1);
       
      
        
      }
      else if(inp2>=0){
        datalistp2.splice(inp2,1);
       
        
      }else if(inp3>=0){
        datalistp3.splice(inp3,1);
       
        
      }


      console.log("************")
      
      });
  }
   
  }


function sortAndRenderT1(){
  sectionIncomplete.style.backgroundColor='white';
  datalistp1.sort((a,b)=>{
   return a.objDateInfo - b.objDateInfo
  }); 
  
  datalistp2.sort((a,b)=>{
    return a.objDateInfo - b.objDateInfo
   }); 
   
   datalistp3.sort((a,b)=>{
    return a.objDateInfo - b.objDateInfo
   }); 
  
   console.log(datalistp1)
   console.log(datalistp2)
   console.log(datalistp3)
  
  for(const text of datalistp1){
    completedTask= document.createElement('button');
    const dataInSection1 = document.createElement('div');
    dataInSection1.className='data-section-1';
    
    dataInSection1.innerHTML=`
    <div class="info-in-task">
   <h1>${text.objName}</h1>
   <h1>${text.objDate}</h1>
   <h1>${text.objtime}</h1>
   </div>
    `;
 
     dataInSection1.style.backgroundColor=text.objpriority;
     dataInSection1.style.width='100%'
     dataInSection1.style.opacity='.8';
     completedTask.className='completed';
      completedTask.textContent='Completed';
      dataInSection1.append(completedTask);
     console.log(dataInSection1.children);
     sectionIncomplete.append(dataInSection1);
   
     
     completedTask.addEventListener('click',()=>{
      
   
      const indexOfRemovalinp1 = datalistp1.indexOf(text);
      const indexInData = data.indexOf(text);

      console.log(datalistp1);
      console.log(data);
      
      arrayCompleted.push(datalistp1[indexOfRemovalinp1]);
          

      datalistp1.splice(indexOfRemovalinp1,1);
      
      sectionIncomplete.innerHTML='';
      sortAndRenderT1();
      data.splice(indexInData,1);
    
   

     
   
 });
   
   
    }
   
   for(const text of datalistp2){
    completedTask= document.createElement('button');
    const dataInSection1 = document.createElement('div');
    dataInSection1.className='data-section-1';
    
    dataInSection1.innerHTML=`
    <div class="info-in-task">
   <h1>${text.objName}</h1>
   <h1>${text.objDate}</h1>
   <h1>${text.objtime}</h1>
   
   </div>
    `;
 
     dataInSection1.style.backgroundColor=text.objpriority;
     dataInSection1.style.width='100%'
     dataInSection1.style.opacity='.8';
     completedTask.className='completed';
     completedTask.textContent='Completed';
     dataInSection1.append(completedTask);
     console.log(dataInSection1.children);
     sectionIncomplete.append(dataInSection1);
   
     
     completedTask.addEventListener('click',()=>{
      
      const indexOfRemovalinp2 = datalistp2.indexOf(text);
      const indexInData = data.indexOf(text);

      console.log(datalistp2);
      console.log(data);
      
      arrayCompleted.push(datalistp2[indexOfRemovalinp2]);
      datalistp2.splice(indexOfRemovalinp2,1);
      

      sectionIncomplete.innerHTML='';
      sortAndRenderT1();
      data.splice(indexInData,1);
     

 });
  
    }
  
    for(const text of datalistp3){
      completedTask= document.createElement('button');
      const dataInSection1 = document.createElement('div');
      dataInSection1.className='data-section-1';
      
      dataInSection1.innerHTML=`
      <div class="info-in-task">
     <h1>${text.objName}</h1>
     <h1>${text.objDate}</h1>
     <h1>${text.objtime}</h1>
     </div>
      `;
   
       dataInSection1.style.backgroundColor=text.objpriority;
       dataInSection1.style.width='100%'
       dataInSection1.style.opacity='.8';
       completedTask.className='completed';
        completedTask.textContent='Completed';
        dataInSection1.append(completedTask);
       console.log(dataInSection1.children);
       sectionIncomplete.append(dataInSection1);
     
       
       completedTask.addEventListener('click',()=>{
        
         const indexOfRemovalinp3 = datalistp3.indexOf(text);
         const indexInData = data.indexOf(text);
 
         console.log(datalistp3);
         console.log(data);
         
         arrayCompleted.push(datalistp3[indexOfRemovalinp3]);

         datalistp3.splice(indexOfRemovalinp3,1);
        
         sectionIncomplete.innerHTML='';
         sortAndRenderT1();
         data.splice(indexInData,1);
        
           

   });
     
    }
}
function renderData()
{
   console.log(datalistp1);
   console.log(datalistp2);
   console.log(datalistp3);
   console.log('in render data');
  console.log(sorttype);
 
  sectionIncomplete.innerHTML='';
   
  if(sorttype===true)sortAndRenderT1();
  else sortAndRenderT2();

}

sortTaskBtn.addEventListener('click',()=>{
  
  k++;
  if(k%2===0){ sorttype=true; renderData();}
  else {sorttype=false; renderData();}

console.log(sorttype);
})
addNewTaskInForm.addEventListener('click',()=>{
  

  sectionIncomplete.innerHTML='';
   dataObjFeeder();
   renderData();
});

deleteTask.addEventListener('click',()=>{
  datalistp1=[];
  data=[];
  datalistp2=[];
  datalistp3=[];
  sectionIncomplete.innerHTML='';
  
})

function renderSection_2(){

  sectionComplete.innerHTML='';
  sectionComplete.style.display='block';
  sectionComplete.style.width='100%';
  

  for(const inp of arrayCompleted)
  {
    const dataInSection2 = document.createElement('div');
    dataInSection2.className='data-section-1';
    
    dataInSection2.innerHTML=`
    <div class="info-in-task">
   <h1>${inp.objName}</h1>
   <h1>${inp.objDate}</h1>
   <h1>${inp.objtime}</h1>
   </div>
    `;
 
     dataInSection2.style.backgroundColor='gray';
     dataInSection2.style.opacity='.5';
    
     sectionComplete.append(dataInSection2);
 
  }
}

/*   const indexOfRemoval=datalistp1.indexOf(text); 
      const shiftObj=datalistp1[indexOfRemoval];
      console.log(shiftObj);
      console.log('*********************************')
       
      console.log(data);
      const findinData = data.indexOf(text);
      console.log(findinData);
      data.pop(findinData);     
      console.log(data);

      console.log('*********************************')

      arrayCompleted.push(shiftObj);
      data.pop(indexOfRemoval);
      datalistp1.pop(indexOfRemoval);
     
      sectionIncomplete.innerHTML='';*/


    /*   if(indexSearchinP1!=='-1'){
            arrayCompleted.push(datalistp1[indexSearchinP1]);
          
            datalistp1.splice(indexSearchinP1,1);
          sectionIncomplete.innerHTML='';
       
          console.log('red');
          }
        else if(indexSearchinP2!=='-1'){
          arrayCompleted.push(datalistp2[indexSearchinP2]);
          datalistp2.splice(indexSearchinP2,1);
          sectionIncomplete.innerHTML='';
         
          console.log('green');
        }
        else if(indexSearchinP3!=='-1'){
          arrayCompleted.push(datalistp3[indexSearchinP3]);
          
          datalistp3.splice(indexSearchinP3,1);
          console.log('blue'); 
          sectionIncomplete.innerHTML='';
         
      }*/