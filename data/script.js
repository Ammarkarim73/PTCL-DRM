// // Loader

setTimeout(() => {
    document.getElementById('load').className = 'hidden';
    document.getElementById('block').className = 'block';
}, 4500);

// //Loader


// // Sweet Alert

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

// // Sweet Alert

// tag Pin Color

function tagPinColor(e) {
        if (e.target.value == "f" || e.target.value == "F") {
            e.target.className = " input red"
            e.target.parentElement.className = "red"
        } else if (e.target.value == "S" || e.target.value == "s") {
            e.target.className = " input white"
            e.target.parentElement.className = "white"
        } else if (e.target.value == "" || e.target.value == "") {
            e.target.className = " input white"
            e.target.parentElement.className = "white"
        } else if (e.target.value == "B" || e.target.value == "b") {
            e.target.className = " input yellow"
            e.target.parentElement.className = "yellow"
        } else if (e.target.value == "W" || e.target.value == "w") {
            e.target.className = " input green"
            e.target.parentElement.className = "green"
        }else if (isNaN(e.target.value) == false) {
            e.target.className = " input green"
            e.target.parentElement.className = "green"
        }

}

window.tagPinColor = tagPinColor;

// tag Pin Color



// button Color

function btngreen(x) {
    if (x == "a"){
        document.getElementById(x).style.color = "black";
        document.getElementById(x).style.backgroundColor= "#8dc63f";
        document.getElementById("b").style.color = "#0D6DB6";
        document.getElementById("b").style.backgroundColor = "#F0F0F0";
        document.getElementById("c").style.color = "#0D6DB6";
        document.getElementById("c").style.backgroundColor = "#F0F0F0";
        document.getElementById("d").style.backgroundColor = "#F0F0F0";
        document.getElementById("d").style.color = "#0D6DB6";
        document.getElementById("e").style.backgroundColor = "#F0F0F0";
        document.getElementById("e").style.color = "#0D6DB6";

    }
    if (x == "b"){
        document.getElementById(x).style.color = "black";
        document.getElementById(x).style.backgroundColor= "#8dc63f";
        document.getElementById("a").style.color = "#0D6DB6";
        document.getElementById("a").style.backgroundColor = "#F0F0F0";
        document.getElementById("c").style.color = "#0D6DB6";
        document.getElementById("c").style.backgroundColor = "#F0F0F0";
        document.getElementById("d").style.backgroundColor = "#F0F0F0";
        document.getElementById("d").style.color = "#0D6DB6";
        document.getElementById("e").style.backgroundColor = "#F0F0F0";
        document.getElementById("e").style.color = "#0D6DB6";
    }
    if (x == "c"){
        document.getElementById(x).style.color = "black";
        document.getElementById(x).style.backgroundColor= "#8dc63f";
        document.getElementById("a").style.color = "#0D6DB6";
        document.getElementById("a").style.backgroundColor = "#F0F0F0";
        document.getElementById("b").style.color = "#0D6DB6";
        document.getElementById("b").style.backgroundColor = "#F0F0F0";
        document.getElementById("d").style.backgroundColor = "#F0F0F0";
        document.getElementById("d").style.color = "#0D6DB6";
        document.getElementById("e").style.backgroundColor = "#F0F0F0";
        document.getElementById("e").style.color = "#0D6DB6";
    }
    if (x == "d"){
        document.getElementById(x).style.color = "black";
        document.getElementById(x).style.backgroundColor= "#8dc63f";
        document.getElementById("a").style.color = "#0D6DB6";
        document.getElementById("a").style.backgroundColor = "#F0F0F0";
        document.getElementById("b").style.color = "#0D6DB6";
        document.getElementById("b").style.backgroundColor = "#F0F0F0";
        document.getElementById("c").style.backgroundColor = "#F0F0F0";
        document.getElementById("c").style.color = "#0D6DB6";
        document.getElementById("e").style.backgroundColor = "#F0F0F0";
        document.getElementById("e").style.color = "#0D6DB6";
    }
    if (x == "e"){
        document.getElementById(x).style.color = "black";
        document.getElementById(x).style.backgroundColor= "#8dc63f";
        document.getElementById("a").style.color = "#0D6DB6";
        document.getElementById("a").style.backgroundColor = "#F0F0F0";
        document.getElementById("b").style.color = "#0D6DB6";
        document.getElementById("b").style.backgroundColor = "#F0F0F0";
        document.getElementById("c").style.backgroundColor = "#F0F0F0";
        document.getElementById("c").style.color = "#0D6DB6";
        document.getElementById("d").style.backgroundColor = "#F0F0F0";
        document.getElementById("d").style.color = "#0D6DB6";
    }

}

window.btngreen = btngreen; 


// button Color



// change Table

const changeTable = (tableID) => {

    if (tableID.id == 'table0') {
        tableID.className = '';
        document.getElementById('table1').className = 'hidden';
        document.getElementById('table2').className = 'hidden';
        document.getElementById('table3').className = 'hidden';
        document.getElementById('table4').className = 'hidden';
        
    } else if (tableID.id == 'table1'){
        tableID.className = '';
        document.getElementById('table0').className = 'hidden';
        document.getElementById('table2').className = 'hidden';
        document.getElementById('table3').className = 'hidden';
        document.getElementById('table4').className = 'hidden';
        
    } else if (tableID.id == 'table2'){
        tableID.className = '';
        document.getElementById('table0').className = 'hidden';
        document.getElementById('table1').className = 'hidden';
        document.getElementById('table3').className = 'hidden';
        document.getElementById('table4').className = 'hidden';

    
    }
    else if (tableID.id == 'table3'){
        tableID.className = '';
        document.getElementById('table0').className = 'hidden';
        document.getElementById('table1').className = 'hidden'; 
        document.getElementById('table2').className = 'hidden';
        document.getElementById('table4').className = 'hidden';
    }

    else if (tableID.id == 'table4'){
        tableID.className = '';
        document.getElementById('table0').className = 'hidden';
        document.getElementById('table1').className = 'hidden'; 
        document.getElementById('table2').className = 'hidden';
        document.getElementById('table3').className = 'hidden';
    }

}

window.changeTable = changeTable;

// change Table





// // Search Box filter Values

// // const myFunction = () => {
// //     let abc, filter, ul, li, a, b, c, d, e, f, g, i, j, k, txtValue;
// //     abc = document.getElementById("myInput");
// //     filter = abc.value;
// //     ul = document.getElementsByTagName("tr");
// //     document.getElementById('ol').innerHTML = '';  
   
// //     if(!filter){
// //         for (i = 0; i < ul.length; i++) {
// //             li = ul[i].getElementsByTagName("td");
// //             for (j = 0; j < li.length; j++) {
// //                 li[j].style.display = "";
// //             }}
// //             document.getElementById('p').innerHTML = '';
// //     }else{ 
// //         if(isNaN(filter)){

// //             for (i = 0; i < ul.length; i++) {
// //                 li = ul[i].getElementsByTagName("td"); 
                
// //                 for (j = 0; j < li.length; j++) {
// //                      a = li[j].childNodes;
// //                      for (k = 0; k < a.length; k++) {
// //                         b = a[k];
// //                         if(b.id == 'input1'){
// //                             e = b.value;
// //                         }
// //                         if(b.id == 'input2'){
// //                                         txtValue = b.value;  
// //                                     }
                
// //             if(txtValue != undefined && txtValue != ''){
            
// //             for (let index = 0; index < 1; index++) {
            
// //                 if (txtValue.indexOf(filter) > -1 == true) {
// //                     li[j].style.display = "";  
// //                     c = j;
// //                     c++
        
// //                     var classname;
// //                     var br;
                    
// //                     c==1 ? d='T/NO     : ':''
// //                     if(c == 2){
// //                         d='ADDRESS  : ';
// //                         classname = 'second';
// //                     }else{
// //                         classname='';
// //                     }
// //                     c==3 ? d='N.E      : ':''
// //                     c==4 ? d='PRY PAIR : ':''
// //                     c==5 ? d='SEC PAIR : ':''
// //                     c==6 ? d='MODEM ID : ':''
// //                     c==7 ? d='NTC BY   : ':''
// //                     c==8 ? d='DATE     : ':''
// //                     c==9 ? d='MODEM #  : ':''
        
// //                     if(c == 10){
// //                         c = 0
// //                         br = '<br />'}else{br = ''}
        
// //                     document.getElementById('p').innerHTML = 'You Have Searched From Address';
// //                     document.getElementById('ol').innerHTML += `<li class="${classname}"> ${d} ${b.value}</li>` + br + br;
        
                    
// //                 }
// //                  else {
// //                     li[j].style.display = "none";
// //                 }
// //         }
// //             }else{}
// //         }
        
                    
// //                 }
        
        
// //             }


// //         }else {

// //             for (i = 0; i < ul.length; i++) {
// //                 li = ul[i].getElementsByTagName("td"); 
                
// //                 for (j = 0; j < li.length; j++) {
// //                      a = li[j].childNodes;
// //                      for (k = 0; k < a.length; k++) {
// //                         b = a[k];
// //                         if(b.id == 'input1'){
// //                                         txtValue = b.value;
                                        
// //                                     }
                
                    
// //             for (let index = 0; index < 1; index++) {
                
            
// //                 if (txtValue.indexOf(filter) > -1 == true) {
// //                     li[j].style.display = "";  
// //                     c = j;
// //                     c++;
        
// //                     var classname;
// //                     var br;
        
// //                     if(c == 1){
// //                         d='T/NO     : ';
// //                         classname = 'first';
// //                     }else{
// //                         classname='';
// //                     }
// //                     c==2 ? d='ADDRESS  : ':''
// //                     c==3 ? d='N.E      : ':''
// //                     c==4 ? d='PRY PAIR : ':''
// //                     c==5 ? d='SEC PAIR : ':''
// //                     c==6 ? d='MODEM ID : ':''
// //                     c==7 ? d='NTC BY   : ':''
// //                     c==8 ? d='DATE     : ':''
// //                     c==9 ? d='MODEM #  : ':''
        
        
// //                     if(c == 10){
// //                         c = 0
// //                         br = '<br />'}else{br = ''}
        
// //                     document.getElementById('p').innerHTML = 'You Have Searched From Telephone Number';
// //                     document.getElementById('ol').innerHTML += `<li class="${classname}"> ${d} ${b.value}</li>` + br + br;
        
                    
// //                 }
// //                  else {
// //                     li[j].style.display = "none";
// //                 }
// //             }
// //             }
        
                    
// //                 }
        
        
// //             }

// //         }


// // }
// // }

// // window.myFunction = myFunction;



// // Search Box filter Values





// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
	import { getAuth, signOut, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
    import { doc, setDoc, collection, getFirestore, getDocs, getDoc, updateDoc,} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
  
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAYNO2zVMOB8O2JkllLJOdfuIPe9SV6Mp8",
        authDomain: "ptcl-drm.firebaseapp.com",
        projectId: "ptcl-drm",
        storageBucket: "ptcl-drm.appspot.com",
        messagingSenderId: "315898261128",
        appId: "1:315898261128:web:660182f66c32934537393d",
        measurementId: "G-R17N0BZVFL"
      };

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth();
    let uid;



    const signout = document.getElementById('signout');

    signout.addEventListener('click' , () => {
        Toast.fire({
            icon: 'success',
            title: 'Signed out successfully!'
          })
        signOut(auth).then(() => {
              setTimeout(() => {
                window.open('../Index.html','_self')
              }, 3000);
          }).catch((error) => {

          });
    })

    let tbody;

    let tr1;
    let tr2;
    let tr3;
    let tr4;
    let tr5;
    let tr6;
    let tr7;
    let tr8;
    let tr9;
    let tr10;

    let td1;
    let td2;
    let td3;
    let td4;
    let td5;
    let td6;
    let td7;
    let td8;
    let td9;
    let td10;

    let val1;let val2;let val3;let val4;let val5;let val6;let val7;let val8;
    let val9;let val10;let val11;let val12;let val13;let val14;let val15;
    let val16;let val17;let val18;let val19;let val20;let val21;let val22;
    let val23;let val24;let val25;let val26;let val27;let val28;let val29;
    let val30;let val31;let val32;let val33;let val34;let val35;let val36;
    let val37;let val38;let val39;let val40;let val41;let val42;let val43;
    let val44;let val45;let val46;let val47;let val48;let val49;let val50;
    let val51;let val52;let val53;let val54;let val55;let val56;let val57;
    let val58;let val59;let val60;let val61;let val62;let val63;let val64;
    let val65;let val66;let val67;let val68;let val69;let val70;let val71;
    let val72;




    
      const updateDocument = async(event, dpName, dpNum, tableName) => {

        tbody = event.target.previousElementSibling.previousElementSibling;

        var location = tbody.parentElement.previousElementSibling.getElementsByTagName('input')[0].value;

        // table row

            tr1 = tbody.childNodes[1];
            tr2 = tbody.childNodes[3];
            tr3 = tbody.childNodes[5];
            tr4 = tbody.childNodes[7];
            tr5 = tbody.childNodes[9];
            tr6 = tbody.childNodes[11];
            tr7 = tbody.childNodes[13];
            tr8 = tbody.childNodes[15];
            tr9 = tbody.childNodes[17];
            tr10 = tbody.childNodes[19];

        // table row

        // table td
        
            td1 = tr1.getElementsByTagName('input')
            val1 = td1[0].value
            val2 = td1[1].value
            val3 = td1[2].value
            val4 = td1[3].value
            val5 = td1[4].value
            val6 = td1[5].value
            val7 = td1[6].value
            val8 = td1[7].value
            val9 = td1[8].value

            td2 = tr2.getElementsByTagName('input')
            val10 = td2[0].value
            val11 = td2[1].value
            val12 = td2[2].value
            val13 = td2[3].value
            val14 = td2[4].value
            val15 = td2[5].value
            val16 = td2[6].value

            td3 = tr3.getElementsByTagName('input')
            val17 = td3[0].value
            val18 = td3[1].value
            val19 = td3[2].value
            val20 = td3[3].value
            val21 = td3[4].value
            val22 = td3[5].value
            val23 = td3[6].value

            td4 = tr4.getElementsByTagName('input')
            val24 = td4[0].value
            val25 = td4[1].value
            val26 = td4[2].value
            val27 = td4[3].value
            val28 = td4[4].value
            val29 = td4[5].value
            val30 = td4[6].value

            td5 = tr5.getElementsByTagName('input')
            val31 = td5[0].value
            val32 = td5[1].value
            val33 = td5[2].value
            val34 = td5[3].value
            val35 = td5[4].value
            val36 = td5[5].value
            val37 = td5[6].value

            td6 = tr6.getElementsByTagName('input')
            val38 = td6[0].value
            val39 = td6[1].value
            val40 = td6[2].value
            val41 = td6[3].value
            val42 = td6[4].value
            val43 = td6[5].value
            val44 = td6[6].value

            td7 = tr7.getElementsByTagName('input')
            val45 = td7[0].value
            val46 = td7[1].value
            val47 = td7[2].value
            val48 = td7[3].value
            val49 = td7[4].value
            val50 = td7[5].value
            val51 = td7[6].value

            td8 = tr8.getElementsByTagName('input')
            val52 = td8[0].value
            val53 = td8[1].value
            val54 = td8[2].value
            val55 = td8[3].value
            val56 = td8[4].value
            val57 = td8[5].value
            val58 = td8[6].value

            td9 = tr9.getElementsByTagName('input')
            val59 = td9[0].value
            val60 = td9[1].value
            val61 = td9[2].value
            val62 = td9[3].value
            val63 = td9[4].value
            val64 = td9[5].value
            val65 = td9[6].value

            td10 = tr10.getElementsByTagName('input')
            val66 = td10[0].value
            val67 = td10[1].value
            val68 = td10[2].value
            val69 = td10[3].value
            val70 = td10[4].value
            val71 = td10[5].value
            val72 = td10[6].value


        // table td


        const docRef = doc(db, tableName, dpNum);
        await updateDoc(docRef, {
            location: location,input1: val1,input2: val2,input3: val3,input4: val4,input5: val5,
            input6: val6,input7: val7,input8: val8,input9: val9, input10: val10,
            input11: val11,input12: val12,input13: val13,input14: val14,input15: val15,
            input16: val16,input17: val17,input18: val18,input19: val19, input20: val20,
            input21: val21,input22: val22,input23: val23,input24: val24,input25: val25,
            input26: val26,input27: val27,input28: val28,input29: val29, input30: val30,
            input31: val31,input32: val32,input33: val33,input34: val34,input35: val35,
            input36: val36,input37: val37,input38: val38,input39: val39, input40: val40,
            input41: val41,input42: val42,input43: val43,input44: val44,input45: val45,
            input46: val46,input47: val47,input48: val48,input49: val49, input50: val50,
            input51: val51,input52: val52,input53: val53,input54: val54,input55: val55,
            input56: val56,input57: val57,input58: val58,input59: val59, input60: val60,
            input61: val61,input62: val62,input63: val63,input64: val64,input65: val65,
            input66: val66,input67: val67,input68: val68,input69: val69, input70: val70,
            input71: val71,input72: val72
         });
         Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: `Your ${dpName} Table Has Been Updated!`,
            iconColor: 'green',
            background: 'white',
            color: 'black',
          });
         
      }
      window.updateDocument = updateDocument;




      window.onload = async() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if(user){
            uid = user.uid;
          }else{
            uid = null;
          }
          if (uid == null){
            window.open("../index.html",'_self')
          }
          else{
            console.log("user is registered & logged in.")
          }
        })
      


                    // ES6 Condition in doc id for arranging the numbers


            //     doc.id==10?'2':'' ||
                // doc.id==11?'3':'' ||
                // doc.id==12?'4':'' ||
                // doc.id==13?'5':'' ||
                // doc.id==14?'6':'' ||
                // doc.id==15?'7':'' ||
                // doc.id==16?'8':'' ||
                // doc.id==17?'9':'' ||
                // doc.id==18?'10':'' ||
                // doc.id==19?'21':'' ||
                // doc.id==2?'22':'' ||
                // doc.id==20?'23':'' ||
                // doc.id==21?'24':'' ||
                // doc.id==22?'25':'' ||
                // doc.id==23?'26':'' ||
                // doc.id==24?'27':'' ||
                // doc.id==25?'28':'' ||
                // doc.id==26?'29':'' ||
                // doc.id==27?'30':'' ||
                // doc.id==28?'41':'' ||
                // doc.id==29?'42':'' ||
                // doc.id==3?'43':'' ||
                // doc.id==30?'44':'' ||
                // doc.id==31?'45':'' ||
                // doc.id==32?'46':'' ||
                // doc.id==33?'47':'' ||
                // doc.id==34?'48':'' ||
                // doc.id==35?'49':'' ||
                // doc.id==36?'50':'' ||
                // doc.id==37?'61':'' ||
                // doc.id==38?'62':'' ||
                // doc.id==39?'63':'' ||
                // doc.id==4?'64':'' ||
                // doc.id==40?'65':'' ||
                // doc.id==41?'66':'' ||
                // doc.id==42?'67':'' ||
                // doc.id==43?'68':'' ||
                // doc.id==44?'69':'' ||
                // doc.id==45?'70':'' ||
                // doc.id==46?'81':'' ||
                // doc.id==47?'82':'' ||
                // doc.id==48?'83':'' ||
                // doc.id==49?'84':'' ||
                // doc.id==5?'85':'' ||
                // doc.id==50?'86':'' ||
                // doc.id==51?'87':'' ||
                // doc.id==52?'88':'' ||
                // doc.id==53?'89':'' ||
                // doc.id==54?'90':'' ||
                // doc.id==55?'101':'' ||
                // doc.id==56?'102':'' ||
                // doc.id==57?'103':'' ||
                // doc.id==58?'104':'' ||
                // doc.id==59?'105':'' ||
                // doc.id==6?'106':'' ||
                // doc.id==60?'107':'' ||
                // doc.id==61?'108':'' ||
                // doc.id==62?'109':'' ||
                // doc.id==63?'110':''

                            // ES6 Condition in doc id for arranging the numbers



// Tables

        const table0 = await getDocs(collection(db, "table0"));
        table0.forEach((doc) => { 
            console.log(doc.id)
            

            
            if (doc.id == 1) {
                document.getElementById('location0').value = doc.data().location;
            }

        const div = `<tbody id="tbody0">
    <tr align="center">

    <td class="rectriangleWidth rectriangleHeight" rowspan="10">
        <input id="input0" class="input" type="text" value="${doc.data().input1}" />
        <p id="input0_1" class="input">${  
                doc.id==1?'1':'' ||
                doc.id==10?'2':'' ||
                doc.id==11?'3':'' ||
                doc.id==12?'4':'' ||
                doc.id==13?'5':'' ||
                doc.id==14?'6':'' ||
                doc.id==15?'7':'' ||
                doc.id==16?'8':'' ||
                doc.id==17?'9':'' ||
                doc.id==18?'10':'' ||
                doc.id==19?'21':'' ||
                doc.id==2?'22':'' ||
                doc.id==20?'23':'' ||
                doc.id==21?'24':'' ||
                doc.id==22?'25':'' ||
                doc.id==23?'26':'' ||
                doc.id==24?'27':'' ||
                doc.id==25?'28':'' ||
                doc.id==26?'29':'' ||
                doc.id==27?'30':'' ||
                doc.id==28?'41':'' ||
                doc.id==29?'42':'' ||
                doc.id==3?'43':'' ||
                doc.id==30?'44':'' ||
                doc.id==31?'45':'' ||
                doc.id==32?'46':'' ||
                doc.id==33?'47':'' ||
                doc.id==34?'48':'' ||
                doc.id==35?'49':'' ||
                doc.id==36?'50':'' ||
                doc.id==37?'61':'' ||
                doc.id==38?'62':'' ||
                doc.id==39?'63':'' ||
                doc.id==4?'64':'' ||
                doc.id==40?'65':'' ||
                doc.id==41?'66':'' ||
                doc.id==42?'67':'' ||
                doc.id==43?'68':'' ||
                doc.id==44?'69':'' ||
                doc.id==45?'70':''}</p>
        <input id="input0_2" class="input" type="text" value="${doc.data().input2}" />
    </td>
    <td class="tdinput">1</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input3 == "" ? "input white" :

            doc.data().input3 == "f" ? "input red" :
            doc.data().input3 == "F"?"input red" :
                
            doc.data().input3 == "s" ? "input white"  :
            doc.data().input3 == "S"?"input white" :
                
            doc.data().input3 == "b" ? "input yellow" :
            doc.data().input3 == "B"?"input yellow" :
                
            doc.data().input3 == "w" ? "input green" :
            doc.data().input3 == "W"?"input green" :

            isNaN(doc.data().input3) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input3}" onchange="tagPinColor(event)" maxlength="1"/></td>

    <td><input id="input3" class="input" type="text" value="${doc.data().input4}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input5}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input6}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input7}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input8}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input9}" /></td>

    </tr>
    
    <tr align="center">

    <td class="tdinput">2</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input10 == "" ? "input white" :

        doc.data().input10 == "f" ? "input red" :
        doc.data().input10 == "F"?"input red" :
            
        doc.data().input10 == "s" ? "input white"  :
        doc.data().input10 == "S"?"input white" :
            
        doc.data().input10 == "b" ? "input yellow" :
        doc.data().input10 == "B"?"input yellow" :
            
        doc.data().input10 == "w" ? "input green" :
        doc.data().input10 == "W"?"input green" :

        isNaN(doc.data().input10) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input10}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input11}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input12}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input13}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input14}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input15}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input16}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">3</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input17 == "" ? "input white" :

        doc.data().input17 == "f" ? "input red" :
        doc.data().input17 == "F"?"input red" :
            
        doc.data().input17 == "s" ? "input white"  :
        doc.data().input17 == "S"?"input white" :
            
        doc.data().input17 == "b" ? "input yellow" :
        doc.data().input17 == "B"?"input yellow" :
            
        doc.data().input17 == "w" ? "input green" :
        doc.data().input17 == "W"?"input green" :

        isNaN(doc.data().input17) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input17}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input18}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input19}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input20}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input21}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input22}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input23}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">4</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input24 == "" ? "input white" :

        doc.data().input24 == "f" ? "input red" :
        doc.data().input24 == "F"?"input red" :
            
        doc.data().input24 == "s" ? "input white"  :
        doc.data().input24 == "S"?"input white" :
            
        doc.data().input24 == "b" ? "input yellow" :
        doc.data().input24 == "B"?"input yellow" :
            
        doc.data().input24 == "w" ? "input green" :
        doc.data().input24 == "W"?"input green" :

        isNaN(doc.data().input24) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input24}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input25}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input26}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input27}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input28}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input29}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input30}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">5</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input31 == "" ? "input white" :

        doc.data().input31 == "f" ? "input red" :
        doc.data().input31 == "F"?"input red" :
            
        doc.data().input31 == "s" ? "input white"  :
        doc.data().input31 == "S"?"input white" :
            
        doc.data().input31 == "b" ? "input yellow" :
        doc.data().input31 == "B"?"input yellow" :
            
        doc.data().input31 == "w" ? "input green" :
        doc.data().input31 == "W"?"input green" :

        isNaN(doc.data().input31) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input31}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input32}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input33}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input34}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input35}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input36}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input37}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">6</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input38 == "" ? "input white" :

        doc.data().input38 == "f" ? "input red" :
        doc.data().input38 == "F"?"input red" :
            
        doc.data().input38 == "s" ? "input white"  :
        doc.data().input38 == "S"?"input white" :
            
        doc.data().input38 == "b" ? "input yellow" :
        doc.data().input38 == "B"?"input yellow" :
            
        doc.data().input38 == "w" ? "input green" :
        doc.data().input38 == "W"?"input green" :

        isNaN(doc.data().input38) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input38}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input39}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input40}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input41}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input42}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input43}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input44}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">7</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input45 == "" ? "input white" :

        doc.data().input45 == "f" ? "input red" :
        doc.data().input45 == "F"?"input red" :
            
        doc.data().input45 == "s" ? "input white"  :
        doc.data().input45 == "S"?"input white" :
            
        doc.data().input45 == "b" ? "input yellow" :
        doc.data().input45 == "B"?"input yellow" :
            
        doc.data().input45 == "w" ? "input green" :
        doc.data().input45 == "W"?"input green" :

        isNaN(doc.data().input45) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input45}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input46}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input47}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input48}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input49}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input50}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input51}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">8</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input52 == "" ? "input white" :

        doc.data().input52 == "f" ? "input red" :
        doc.data().input52 == "F"?"input red" :
            
        doc.data().input52 == "s" ? "input white"  :
        doc.data().input52 == "S"?"input white" :
            
        doc.data().input52 == "b" ? "input yellow" :
        doc.data().input52 == "B"?"input yellow" :
            
        doc.data().input52 == "w" ? "input green" :
        doc.data().input52 == "W"?"input green" :

        isNaN(doc.data().input52) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input52}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input53}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input54}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input55}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input56}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input57}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input58}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">9</td>
    <td class="tdinput"><input id="input2" class="${     
        
                
        doc.data().input59 == "" ? "input white" :

        doc.data().input59 == "f" ? "input red" :
        doc.data().input59 == "F"?"input red" :
            
        doc.data().input59 == "s" ? "input white"  :
        doc.data().input59 == "S"?"input white" :
            
        doc.data().input59 == "b" ? "input yellow" :
        doc.data().input59 == "B"?"input yellow" :
            
        doc.data().input59 == "w" ? "input green" :
        doc.data().input59 == "W"?"input green" :

        isNaN(doc.data().input59) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input59}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input60}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input61}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input62}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input63}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input64}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input65}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">10</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input66 == "" ? "input white" :

        doc.data().input66 == "f" ? "input red" :
        doc.data().input66 == "F"?"input red" :
            
        doc.data().input66 == "s" ? "input white"  :
        doc.data().input66 == "S"?"input white" :
            
        doc.data().input66 == "b" ? "input yellow" :
        doc.data().input66 == "B"?"input yellow" :
            
        doc.data().input66 == "w" ? "input green" :
        doc.data().input66 == "W"?"input green" :

        isNaN(doc.data().input66) == false?"input green" : 'input'
            
}" type="text" value="${doc.data().input66}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input67}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input68}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input69}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input70}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input71}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input72}" /></td>

    </tr>

    
</tbody>

    <br />
        
    <button id="updateDoc" onclick="updateDocument(event, 'DP${doc.id}', '${doc.id}', 'table0')">Update</button>`;
document.getElementById('tableData0').innerHTML += div;

            })


        const table1 = await getDocs(collection(db, "table1"));
        table1.forEach((doc) => { 
            if (doc.id == 1) {
                document.getElementById('location1').value = doc.data().location;
            }
        const div = `<tbody id="tbody1">
    <tr align="center">

    <td class="rectriangleWidth rectriangleHeight" rowspan="10">
        <input id="input0" class="input" type="text" value="${doc.data().input1}" />
        <p id="input0_1" class="input">${
                doc.id==1?'1':'' ||
                doc.id==10?'2':'' ||
                doc.id==11?'3':'' ||
                doc.id==12?'4':'' ||
                doc.id==13?'5':'' ||
                doc.id==14?'6':'' ||
                doc.id==15?'7':'' ||
                doc.id==16?'8':'' ||
                doc.id==17?'9':'' ||
                doc.id==18?'10':'' ||
                doc.id==19?'21':'' ||
                doc.id==2?'22':'' ||
                doc.id==20?'23':'' ||
                doc.id==21?'24':'' ||
                doc.id==22?'25':'' ||
                doc.id==23?'26':'' ||
                doc.id==24?'27':'' ||
                doc.id==25?'28':'' ||
                doc.id==26?'29':'' ||
                doc.id==27?'30':'' ||
                doc.id==28?'41':'' ||
                doc.id==29?'42':'' ||
                doc.id==3?'43':'' ||
                doc.id==30?'44':'' ||
                doc.id==31?'45':''
        }</p>
        <input id="input0_2" class="input" type="text" value="${doc.data().input2}" />
    </td>
    <td class="tdinput">1</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input3 == "" ? "input white" :

            doc.data().input3 == "f" ? "input red" :
            doc.data().input3 == "F"?"input red" :
                
            doc.data().input3 == "s" ? "input white"  :
            doc.data().input3 == "S"?"input white" :
                
            doc.data().input3 == "b" ? "input yellow" :
            doc.data().input3 == "B"?"input yellow" :
                
            doc.data().input3 == "w" ? "input green" :
            doc.data().input3 == "W"?"input green" :

            isNaN(doc.data().input3) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input3}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input4}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input5}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input6}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input7}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input8}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input9}" /></td>

    </tr>
    
    <tr align="center">

    <td class="tdinput">2</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input10 == "" ? "input white" :

            doc.data().input10 == "f" ? "input red" :
            doc.data().input10 == "F"?"input red" :
                
            doc.data().input10 == "s" ? "input white"  :
            doc.data().input10 == "S"?"input white" :
                
            doc.data().input10 == "b" ? "input yellow" :
            doc.data().input10 == "B"?"input yellow" :
                
            doc.data().input10 == "w" ? "input green" :
            doc.data().input10 == "W"?"input green" :

            isNaN(doc.data().input10) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input10}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input11}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input12}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input13}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input14}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input15}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input16}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">3</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input17 == "" ? "input white" :

            doc.data().input17 == "f" ? "input red" :
            doc.data().input17 == "F"?"input red" :
                
            doc.data().input17 == "s" ? "input white"  :
            doc.data().input17 == "S"?"input white" :
                
            doc.data().input17 == "b" ? "input yellow" :
            doc.data().input17 == "B"?"input yellow" :
                
            doc.data().input17 == "w" ? "input green" :
            doc.data().input17 == "W"?"input green" :

            isNaN(doc.data().input17) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input17}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input18}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input19}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input20}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input21}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input22}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input23}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">4</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input24 == "" ? "input white" :

            doc.data().input24 == "f" ? "input red" :
            doc.data().input24 == "F"?"input red" :
                
            doc.data().input24 == "s" ? "input white"  :
            doc.data().input24 == "S"?"input white" :
                
            doc.data().input24 == "b" ? "input yellow" :
            doc.data().input24 == "B"?"input yellow" :
                
            doc.data().input24 == "w" ? "input green" :
            doc.data().input24 == "W"?"input green" :

            isNaN(doc.data().input24) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input24}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input25}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input26}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input27}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input28}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input29}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input30}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">5</td>
    <td class="tdinput"><input id="input2" class="input" type="text" value="${doc.data().input31}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input32}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input33}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input34}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input35}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input36}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input37}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">6</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input38 == "" ? "input white" :

            doc.data().input38 == "f" ? "input red" :
            doc.data().input38 == "F"?"input red" :
                
            doc.data().input38 == "s" ? "input white"  :
            doc.data().input38 == "S"?"input white" :
                
            doc.data().input38 == "b" ? "input yellow" :
            doc.data().input38 == "B"?"input yellow" :
                
            doc.data().input38 == "w" ? "input green" :
            doc.data().input38 == "W"?"input green" :

            isNaN(doc.data().input38) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input38}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input39}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input40}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input41}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input42}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input43}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input44}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">7</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input45 == "" ? "input white" :

            doc.data().input45 == "f" ? "input red" :
            doc.data().input45 == "F"?"input red" :
                
            doc.data().input45 == "s" ? "input white"  :
            doc.data().input45 == "S"?"input white" :
                
            doc.data().input45 == "b" ? "input yellow" :
            doc.data().input45 == "B"?"input yellow" :
                
            doc.data().input45 == "w" ? "input green" :
            doc.data().input45 == "W"?"input green" :

            isNaN(doc.data().input45) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input45}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input46}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input47}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input48}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input49}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input50}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input51}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">8</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input52 == "" ? "input white" :

            doc.data().input52 == "f" ? "input red" :
            doc.data().input52 == "F"?"input red" :
                
            doc.data().input52 == "s" ? "input white"  :
            doc.data().input52 == "S"?"input white" :
                
            doc.data().input52 == "b" ? "input yellow" :
            doc.data().input52 == "B"?"input yellow" :
                
            doc.data().input52 == "w" ? "input green" :
            doc.data().input52 == "W"?"input green" :

            isNaN(doc.data().input52) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input52}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input53}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input54}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input55}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input56}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input57}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input58}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">9</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input59 == "" ? "input white" :

            doc.data().input59 == "f" ? "input red" :
            doc.data().input59 == "F"?"input red" :
                
            doc.data().input59 == "s" ? "input white"  :
            doc.data().input59 == "S"?"input white" :
                
            doc.data().input59 == "b" ? "input yellow" :
            doc.data().input59 == "B"?"input yellow" :
                
            doc.data().input59 == "w" ? "input green" :
            doc.data().input59 == "W"?"input green" :

            isNaN(doc.data().input59) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input59}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input60}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input61}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input62}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input63}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input64}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input65}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">10</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input66 == "" ? "input white" :

            doc.data().input66 == "f" ? "input red" :
            doc.data().input66 == "F"?"input red" :
                
            doc.data().input66 == "s" ? "input white"  :
            doc.data().input66 == "S"?"input white" :
                
            doc.data().input66 == "b" ? "input yellow" :
            doc.data().input66 == "B"?"input yellow" :
                
            doc.data().input66 == "w" ? "input green" :
            doc.data().input66 == "W"?"input green" :

            isNaN(doc.data().input66) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input66}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input67}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input68}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input69}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input70}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input71}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input72}" /></td>

    </tr>

    
</tbody>

    <br />
        
    <button id="updateDoc" onclick="updateDocument(event, 'DP${doc.id}', '${doc.id}', 'table1')">Update</button>`
;
document.getElementById('tableData1').innerHTML += div;

            })


        const table2 = await getDocs(collection(db, "table2"));
        table2.forEach((doc) => { 
            if (doc.id == 1) {
                document.getElementById('location2').value = doc.data().location;
            }
        const div = `<tbody id="tbody2">
    <tr align="center">

    <td class="rectriangleWidth rectriangleHeight" rowspan="10">
        <input id="input0" class="input" type="text" value="${doc.data().input1}" />
        <p id="input0_1" class="input">${
                doc.id==1?'1':'' ||
                doc.id==10?'2':'' ||
                doc.id==11?'3':'' ||
                doc.id==12?'4':'' ||
                doc.id==13?'5':'' ||
                doc.id==14?'6':'' ||
                doc.id==15?'7':'' ||
                doc.id==16?'8':'' ||
                doc.id==17?'9':'' ||
                doc.id==18?'10':'' ||
                doc.id==19?'21':'' ||
                doc.id==2?'22':'' ||
                doc.id==20?'23':'' ||
                doc.id==21?'24':'' ||
                doc.id==22?'25':'' ||
                doc.id==23?'26':'' ||
                doc.id==24?'27':'' ||
                doc.id==25?'28':'' ||
                doc.id==26?'29':'' ||
                doc.id==27?'30':''
        }</p>
        <input id="input0_2" class="input" type="text" value="${doc.data().input2}" />
    </td>
    <td class="tdinput">1</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input3 == "" ? "input white" :

            doc.data().input3 == "f" ? "input red" :
            doc.data().input3 == "F"?"input red" :
                
            doc.data().input3 == "s" ? "input white"  :
            doc.data().input3 == "S"?"input white" :
                
            doc.data().input3 == "b" ? "input yellow" :
            doc.data().input3 == "B"?"input yellow" :
                
            doc.data().input3 == "w" ? "input green" :
            doc.data().input3 == "W"?"input green" :

            isNaN(doc.data().input3) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input3}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input4}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input5}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input6}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input7}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input8}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input9}" /></td>

    </tr>
    
    <tr align="center">

    <td class="tdinput">2</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input10 == "" ? "input white" :

            doc.data().input10 == "f" ? "input red" :
            doc.data().input10 == "F"?"input red" :
                
            doc.data().input10 == "s" ? "input white"  :
            doc.data().input10 == "S"?"input white" :
                
            doc.data().input10 == "b" ? "input yellow" :
            doc.data().input10 == "B"?"input yellow" :
                
            doc.data().input10 == "w" ? "input green" :
            doc.data().input10 == "W"?"input green" :

            isNaN(doc.data().input10) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input10}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input11}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input12}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input13}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input14}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input15}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input16}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">3</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input17 == "" ? "input white" :

            doc.data().input17 == "f" ? "input red" :
            doc.data().input17 == "F"?"input red" :
                
            doc.data().input17 == "s" ? "input white"  :
            doc.data().input17 == "S"?"input white" :
                
            doc.data().input17 == "b" ? "input yellow" :
            doc.data().input17 == "B"?"input yellow" :
                
            doc.data().input17 == "w" ? "input green" :
            doc.data().input17 == "W"?"input green" :

            isNaN(doc.data().input17) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input17}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input18}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input19}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input20}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input21}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input22}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input23}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">4</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input24 == "" ? "input white" :

            doc.data().input24 == "f" ? "input red" :
            doc.data().input24 == "F"?"input red" :
                
            doc.data().input24 == "s" ? "input white"  :
            doc.data().input24 == "S"?"input white" :
                
            doc.data().input24 == "b" ? "input yellow" :
            doc.data().input24 == "B"?"input yellow" :
                
            doc.data().input24 == "w" ? "input green" :
            doc.data().input24 == "W"?"input green" :

            isNaN(doc.data().input24) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input24}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input25}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input26}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input27}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input28}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input29}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input30}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">5</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input31 == "" ? "input white" :

            doc.data().input31 == "f" ? "input red" :
            doc.data().input31 == "F"?"input red" :
                
            doc.data().input31 == "s" ? "input white"  :
            doc.data().input31 == "S"?"input white" :
                
            doc.data().input31 == "b" ? "input yellow" :
            doc.data().input31 == "B"?"input yellow" :
                
            doc.data().input31 == "w" ? "input green" :
            doc.data().input31 == "W"?"input green" :

            isNaN(doc.data().input31) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input31}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input32}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input33}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input34}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input35}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input36}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input37}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">6</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input38 == "" ? "input white" :

            doc.data().input38 == "f" ? "input red" :
            doc.data().input38 == "F"?"input red" :
                
            doc.data().input38 == "s" ? "input white"  :
            doc.data().input38 == "S"?"input white" :
                
            doc.data().input38 == "b" ? "input yellow" :
            doc.data().input38 == "B"?"input yellow" :
                
            doc.data().input38 == "w" ? "input green" :
            doc.data().input38 == "W"?"input green" :

            isNaN(doc.data().input38) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input38}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input39}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input40}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input41}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input42}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input43}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input44}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">7</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input45 == "" ? "input white" :

            doc.data().input45 == "f" ? "input red" :
            doc.data().input45 == "F"?"input red" :
                
            doc.data().input45 == "s" ? "input white"  :
            doc.data().input45 == "S"?"input white" :
                
            doc.data().input45 == "b" ? "input yellow" :
            doc.data().input45 == "B"?"input yellow" :
                
            doc.data().input45 == "w" ? "input green" :
            doc.data().input45 == "W"?"input green" :

            isNaN(doc.data().input45) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input45}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input46}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input47}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input48}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input49}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input50}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input51}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">8</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input52 == "" ? "input white" :

            doc.data().input52 == "f" ? "input red" :
            doc.data().input52 == "F"?"input red" :
                
            doc.data().input52 == "s" ? "input white"  :
            doc.data().input52 == "S"?"input white" :
                
            doc.data().input52 == "b" ? "input yellow" :
            doc.data().input52 == "B"?"input yellow" :
                
            doc.data().input52 == "w" ? "input green" :
            doc.data().input52 == "W"?"input green" :

            isNaN(doc.data().input52) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input52}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input53}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input54}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input55}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input56}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input57}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input58}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">9</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input59 == "" ? "input white" :

            doc.data().input59 == "f" ? "input red" :
            doc.data().input59 == "F"?"input red" :
                
            doc.data().input59 == "s" ? "input white"  :
            doc.data().input59 == "S"?"input white" :
                
            doc.data().input59 == "b" ? "input yellow" :
            doc.data().input59 == "B"?"input yellow" :
                
            doc.data().input59 == "w" ? "input green" :
            doc.data().input59 == "W"?"input green" :

            isNaN(doc.data().input59) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input59}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input60}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input61}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input62}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input63}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input64}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input65}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">10</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input66 == "" ? "input white" :

            doc.data().input66 == "f" ? "input red" :
            doc.data().input66 == "F"?"input red" :
                
            doc.data().input66 == "s" ? "input white"  :
            doc.data().input66 == "S"?"input white" :
                
            doc.data().input66 == "b" ? "input yellow" :
            doc.data().input66 == "B"?"input yellow" :
                
            doc.data().input66 == "w" ? "input green" :
            doc.data().input66 == "W"?"input green" :

            isNaN(doc.data().input66) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input66}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input67}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input68}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input69}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input70}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input71}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input72}" /></td>

    </tr>

    
</tbody>

    <br />
        
    <button id="updateDoc" onclick="updateDocument(event, 'DP${doc.id}', '${doc.id}', 'table2')">Update</button>`
;
document.getElementById('tableData2').innerHTML += div;

            })


        const table3 = await getDocs(collection(db, "table3"));
        table3.forEach((doc) => { 
            if (doc.id == 1) {
                document.getElementById('location3').value = doc.data().location;
            }
        const div = `<tbody id="tbody3">
    <tr align="center">

    <td class="rectriangleWidth rectriangleHeight" rowspan="10">
        <input id="input0" class="input" type="text" value="${doc.data().input1}" />
        <p id="input0_1" class="input">${
            doc.id==1?'1':'' ||
            doc.id==10?'2':'' ||
            doc.id==11?'3':'' ||
            doc.id==12?'4':'' ||
            doc.id==13?'5':'' ||
            doc.id==14?'6':'' ||
            doc.id==15?'7':'' ||
            doc.id==16?'8':'' ||
            doc.id==17?'9':'' ||
            doc.id==18?'10':'' ||
            doc.id==19?'21':'' ||
            doc.id==2?'22':'' ||
            doc.id==20?'23':'' ||
            doc.id==21?'24':'' ||
            doc.id==22?'25':'' ||
            doc.id==23?'26':'' ||
            doc.id==24?'27':'' ||
            doc.id==25?'28':'' ||
            doc.id==26?'29':'' ||
            doc.id==27?'30':'' ||
            doc.id==28?'41':'' ||
            doc.id==29?'42':'' ||
            doc.id==3?'43':'' ||
            doc.id==30?'44':'' ||
            doc.id==31?'45':''
        }</p>
        <input id="input0_2" class="input" type="text" value="${doc.data().input2}" />
    </td>
    <td class="tdinput">1</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input3 == "" ? "input white" :

            doc.data().input3 == "f" ? "input red" :
            doc.data().input3 == "F"?"input red" :
                
            doc.data().input3 == "s" ? "input white"  :
            doc.data().input3 == "S"?"input white" :
                
            doc.data().input3 == "b" ? "input yellow" :
            doc.data().input3 == "B"?"input yellow" :
                
            doc.data().input3 == "w" ? "input green" :
            doc.data().input3 == "W"?"input green" :

            isNaN(doc.data().input3) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input3}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input4}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input5}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input6}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input7}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input8}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input9}" /></td>

    </tr>
    
    <tr align="center">

    <td class="tdinput">2</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input10 == "" ? "input white" :

            doc.data().input10 == "f" ? "input red" :
            doc.data().input10 == "F"?"input red" :
                
            doc.data().input10 == "s" ? "input white"  :
            doc.data().input10 == "S"?"input white" :
                
            doc.data().input10 == "b" ? "input yellow" :
            doc.data().input10 == "B"?"input yellow" :
                
            doc.data().input10 == "w" ? "input green" :
            doc.data().input10 == "W"?"input green" :

            isNaN(doc.data().input10) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input10}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input11}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input12}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input13}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input14}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input15}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input16}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">3</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input17 == "" ? "input white" :

            doc.data().input17 == "f" ? "input red" :
            doc.data().input17 == "F"?"input red" :
                
            doc.data().input17 == "s" ? "input white"  :
            doc.data().input17 == "S"?"input white" :
                
            doc.data().input17 == "b" ? "input yellow" :
            doc.data().input17 == "B"?"input yellow" :
                
            doc.data().input17 == "w" ? "input green" :
            doc.data().input17 == "W"?"input green" :

            isNaN(doc.data().input17) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input17}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input18}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input19}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input20}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input21}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input22}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input23}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">4</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input24 == "" ? "input white" :

            doc.data().input24 == "f" ? "input red" :
            doc.data().input24 == "F"?"input red" :
                
            doc.data().input24 == "s" ? "input white"  :
            doc.data().input24 == "S"?"input white" :
                
            doc.data().input24 == "b" ? "input yellow" :
            doc.data().input24 == "B"?"input yellow" :
                
            doc.data().input24 == "w" ? "input green" :
            doc.data().input24 == "W"?"input green" :

            isNaN(doc.data().input24) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input24}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input25}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input26}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input27}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input28}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input29}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input30}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">5</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input31 == "" ? "input white" :

            doc.data().input31 == "f" ? "input red" :
            doc.data().input31 == "F"?"input red" :
                
            doc.data().input31 == "s" ? "input white"  :
            doc.data().input31 == "S"?"input white" :
                
            doc.data().input31 == "b" ? "input yellow" :
            doc.data().input31 == "B"?"input yellow" :
                
            doc.data().input31 == "w" ? "input green" :
            doc.data().input31 == "W"?"input green" :

            isNaN(doc.data().input31) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input31}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input32}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input33}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input34}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input35}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input36}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input37}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">6</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input38 == "" ? "input white" :

            doc.data().input38 == "f" ? "input red" :
            doc.data().input38 == "F"?"input red" :
                
            doc.data().input38 == "s" ? "input white"  :
            doc.data().input38 == "S"?"input white" :
                
            doc.data().input38 == "b" ? "input yellow" :
            doc.data().input38 == "B"?"input yellow" :
                
            doc.data().input38 == "w" ? "input green" :
            doc.data().input38 == "W"?"input green" :

            isNaN(doc.data().input38) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input38}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input39}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input40}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input41}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input42}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input43}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input44}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">7</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input45 == "" ? "input white" :

            doc.data().input45 == "f" ? "input red" :
            doc.data().input45 == "F"?"input red" :
                
            doc.data().input45 == "s" ? "input white"  :
            doc.data().input45 == "S"?"input white" :
                
            doc.data().input45 == "b" ? "input yellow" :
            doc.data().input45 == "B"?"input yellow" :
                
            doc.data().input45 == "w" ? "input green" :
            doc.data().input45 == "W"?"input green" :

            isNaN(doc.data().input45) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input45}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input46}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input47}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input48}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input49}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input50}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input51}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">8</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input52 == "" ? "input white" :

            doc.data().input52 == "f" ? "input red" :
            doc.data().input52 == "F"?"input red" :
                
            doc.data().input52 == "s" ? "input white"  :
            doc.data().input52 == "S"?"input white" :
                
            doc.data().input52 == "b" ? "input yellow" :
            doc.data().input52 == "B"?"input yellow" :
                
            doc.data().input52 == "w" ? "input green" :
            doc.data().input52 == "W"?"input green" :

            isNaN(doc.data().input52) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input52}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input53}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input54}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input55}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input56}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input57}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input58}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">9</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input59 == "" ? "input white" :

            doc.data().input59 == "f" ? "input red" :
            doc.data().input59 == "F"?"input red" :
                
            doc.data().input59 == "s" ? "input white"  :
            doc.data().input59 == "S"?"input white" :
                
            doc.data().input59 == "b" ? "input yellow" :
            doc.data().input59 == "B"?"input yellow" :
                
            doc.data().input59 == "w" ? "input green" :
            doc.data().input59 == "W"?"input green" :

            isNaN(doc.data().input59) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input59}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input60}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input61}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input62}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input63}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input64}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input65}" /></td>

    </tr>

    <tr align="center">

    <td class="tdinput">10</td>
    <td class="tdinput"><input id="input2" class="${      
                
        doc.data().input66 == "" ? "input white" :

            doc.data().input66 == "f" ? "input red" :
            doc.data().input66 == "F"?"input red" :
                
            doc.data().input66 == "s" ? "input white"  :
            doc.data().input66 == "S"?"input white" :
                
            doc.data().input66 == "b" ? "input yellow" :
            doc.data().input66 == "B"?"input yellow" :
                
            doc.data().input66 == "w" ? "input green" :
            doc.data().input66 == "W"?"input green" :

            isNaN(doc.data().input66) == false?"input green" : 'input'
                
    
}" type="text" value="${doc.data().input66}" onchange="tagPinColor(event)" maxlength="1"/></td>
    <td><input id="input3" class="input" type="text" value="${doc.data().input67}" /></td>
    <td><input id="input4" class="input" type="text" value="${doc.data().input68}" /></td>
    <td><input id="input5" class="input" type="text" value="${doc.data().input69}" /></td>
    <td><input id="input6" class="input" type="text" value="${doc.data().input70}" /></td>
    <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input71}" /></td>
    <td><input id="input8" class="input" type="text" value="${doc.data().input72}" /></td>

    </tr>

    
</tbody>

    <br />
        
    <button id="updateDoc" onclick="updateDocument(event, 'DP${doc.id}', '${doc.id}', 'table3')">Update</button>`
;
document.getElementById('tableData3').innerHTML += div;

            })
        
            const table4 = await getDocs(collection(db, "table4"));
            table4.forEach((doc) => { 
                if (doc.id == 1) {
                    document.getElementById('location4').value = doc.data().location;
                }
            const div = `<tbody id="tbody4">
        <tr align="center">
    
        <td class="rectriangleWidth rectriangleHeight" rowspan="10">
            <input id="input0" class="input" type="text" value="${doc.data().input1}" />
            <p id="input0_1" class="input">${
                doc.id==1?'1':'' ||
                doc.id==10?'2':'' ||
                doc.id==11?'3':'' ||
                doc.id==12?'4':'' ||
                doc.id==13?'5':'' ||
                doc.id==14?'6':'' ||
                doc.id==15?'7':'' ||
                doc.id==16?'8':'' ||
                doc.id==17?'9':'' ||
                doc.id==18?'10':'' ||
                doc.id==19?'11':'' ||
                doc.id==2?'12':'' ||
                doc.id==20?'13':'' ||
                doc.id==21?'14':'' ||
                doc.id==22?'15':'' ||
                doc.id==23?'16':'' ||
                doc.id==24?'17':'' ||
                doc.id==25?'18':'' ||
                doc.id==26?'19':'' ||
                doc.id==27?'20':'' ||
                doc.id==28?'21':'' ||
                doc.id==29?'22':'' ||
                doc.id==3?'23':'' ||
                doc.id==30?'24':'' ||
                doc.id==31?'25':'' ||
                doc.id==32?'26':'' ||
                doc.id==33?'27':'' ||
                doc.id==34?'28':'' ||
                doc.id==35?'29':'' ||
                doc.id==36?'30':'' ||
                doc.id==37?'31':'' ||
                doc.id==38?'32':'' ||
                doc.id==39?'33':'' ||
                doc.id==4?'34':'' ||
                doc.id==40?'35':'' ||
                doc.id==41?'36':'' ||
                doc.id==42?'37':'' ||
                doc.id==43?'38':'' ||
                doc.id==44?'39':'' ||
                doc.id==45?'40':'' ||
                doc.id==46?'41':'' ||
                doc.id==47?'42':'' ||
                doc.id==48?'43':'' ||
                doc.id==49?'44':'' ||
                doc.id==5?'45':'' ||
                doc.id==50?'46':'' ||
                doc.id==51?'47':'' ||
                doc.id==52?'48':'' ||
                doc.id==53?'49':'' ||
                doc.id==54?'50':'' ||
                doc.id==55?'51':'' ||
                doc.id==56?'52':'' ||
                doc.id==57?'53':'' ||
                doc.id==58?'54':'' ||
                doc.id==59?'55':'' ||
                doc.id==6?'56':'' ||
                doc.id==60?'57':'' ||
                doc.id==61?'58':'' ||
                doc.id==62?'59':'' ||
                doc.id==63?'60':'' ||
                doc.id==64?'61':'' ||
                doc.id==65?'62':'' ||
                doc.id==66?'63':'' ||
                doc.id==67?'64':'' ||
                doc.id==68?'65':'' ||
                doc.id==69?'66':'' ||
                doc.id==7?'67':'' ||
                doc.id==70?'68':'' ||
                doc.id==71?'69':'' ||
                doc.id==72?'70':'' ||
                doc.id==73?'71':'' ||
                doc.id==74?'72':'' ||
                doc.id==75?'73':'' ||
                doc.id==76?'74':'' ||
                doc.id==77?'75':'' ||
                doc.id==78?'76':'' ||
                doc.id==79?'77':'' ||
                doc.id==8?'78':'' ||
                doc.id==80?'79':'' ||
                doc.id==81?'80':''
            }</p>
            <input id="input0_2" class="input" type="text" value="${doc.data().input2}" />
        </td>
        <td class="tdinput">1</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input3 == "" ? "input white" :
    
                doc.data().input3 == "f" ? "input red" :
                doc.data().input3 == "F"?"input red" :
                    
                doc.data().input3 == "s" ? "input white"  :
                doc.data().input3 == "S"?"input white" :
                    
                doc.data().input3 == "b" ? "input yellow" :
                doc.data().input3 == "B"?"input yellow" :
                    
                doc.data().input3 == "w" ? "input green" :
                doc.data().input3 == "W"?"input green" :
    
                isNaN(doc.data().input3) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input3}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input4}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input5}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input6}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input7}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input8}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input9}" /></td>
    
        </tr>
        
        <tr align="center">
    
        <td class="tdinput">2</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input10 == "" ? "input white" :
    
                doc.data().input10 == "f" ? "input red" :
                doc.data().input10 == "F"?"input red" :
                    
                doc.data().input10 == "s" ? "input white"  :
                doc.data().input10 == "S"?"input white" :
                    
                doc.data().input10 == "b" ? "input yellow" :
                doc.data().input10 == "B"?"input yellow" :
                    
                doc.data().input10 == "w" ? "input green" :
                doc.data().input10 == "W"?"input green" :
    
                isNaN(doc.data().input10) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input10}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input11}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input12}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input13}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input14}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input15}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input16}" /></td>
    
        </tr>
    
        <tr align="center">
    
        <td class="tdinput">3</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input17 == "" ? "input white" :
    
                doc.data().input17 == "f" ? "input red" :
                doc.data().input17 == "F"?"input red" :
                    
                doc.data().input17 == "s" ? "input white"  :
                doc.data().input17 == "S"?"input white" :
                    
                doc.data().input17 == "b" ? "input yellow" :
                doc.data().input17 == "B"?"input yellow" :
                    
                doc.data().input17 == "w" ? "input green" :
                doc.data().input17 == "W"?"input green" :
    
                isNaN(doc.data().input17) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input17}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input18}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input19}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input20}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input21}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input22}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input23}" /></td>
    
        </tr>
    
        <tr align="center">
    
        <td class="tdinput">4</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input24 == "" ? "input white" :
    
                doc.data().input24 == "f" ? "input red" :
                doc.data().input24 == "F"?"input red" :
                    
                doc.data().input24 == "s" ? "input white"  :
                doc.data().input24 == "S"?"input white" :
                    
                doc.data().input24 == "b" ? "input yellow" :
                doc.data().input24 == "B"?"input yellow" :
                    
                doc.data().input24 == "w" ? "input green" :
                doc.data().input24 == "W"?"input green" :
    
                isNaN(doc.data().input24) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input24}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input25}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input26}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input27}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input28}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input29}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input30}" /></td>
    
        </tr>
    
        <tr align="center">
    
        <td class="tdinput">5</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input31 == "" ? "input white" :
    
                doc.data().input31 == "f" ? "input red" :
                doc.data().input31 == "F"?"input red" :
                    
                doc.data().input31 == "s" ? "input white"  :
                doc.data().input31 == "S"?"input white" :
                    
                doc.data().input31 == "b" ? "input yellow" :
                doc.data().input31 == "B"?"input yellow" :
                    
                doc.data().input31 == "w" ? "input green" :
                doc.data().input31 == "W"?"input green" :
    
                isNaN(doc.data().input31) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input31}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input32}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input33}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input34}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input35}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input36}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input37}" /></td>
    
        </tr>
    
        <tr align="center">
    
        <td class="tdinput">6</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input38 == "" ? "input white" :
    
                doc.data().input38 == "f" ? "input red" :
                doc.data().input38 == "F"?"input red" :
                    
                doc.data().input38 == "s" ? "input white"  :
                doc.data().input38 == "S"?"input white" :
                    
                doc.data().input38 == "b" ? "input yellow" :
                doc.data().input38 == "B"?"input yellow" :
                    
                doc.data().input38 == "w" ? "input green" :
                doc.data().input38 == "W"?"input green" :
    
                isNaN(doc.data().input38) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input38}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input39}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input40}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input41}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input42}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input43}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input44}" /></td>
    
        </tr>
    
        <tr align="center">
    
        <td class="tdinput">7</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input45 == "" ? "input white" :
    
                doc.data().input45 == "f" ? "input red" :
                doc.data().input45 == "F"?"input red" :
                    
                doc.data().input45 == "s" ? "input white"  :
                doc.data().input45 == "S"?"input white" :
                    
                doc.data().input45 == "b" ? "input yellow" :
                doc.data().input45 == "B"?"input yellow" :
                    
                doc.data().input45 == "w" ? "input green" :
                doc.data().input45 == "W"?"input green" :
    
                isNaN(doc.data().input45) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input45}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input46}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input47}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input48}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input49}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input50}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input51}" /></td>
    
        </tr>
    
        <tr align="center">
    
        <td class="tdinput">8</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input52 == "" ? "input white" :
    
                doc.data().input52 == "f" ? "input red" :
                doc.data().input52 == "F"?"input red" :
                    
                doc.data().input52 == "s" ? "input white"  :
                doc.data().input52 == "S"?"input white" :
                    
                doc.data().input52 == "b" ? "input yellow" :
                doc.data().input52 == "B"?"input yellow" :
                    
                doc.data().input52 == "w" ? "input green" :
                doc.data().input52 == "W"?"input green" :
    
                isNaN(doc.data().input52) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input52}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input53}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input54}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input55}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input56}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input57}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input58}" /></td>
    
        </tr>
    
        <tr align="center">
    
        <td class="tdinput">9</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input59 == "" ? "input white" :
    
                doc.data().input59 == "f" ? "input red" :
                doc.data().input59 == "F"?"input red" :
                    
                doc.data().input59 == "s" ? "input white"  :
                doc.data().input59 == "S"?"input white" :
                    
                doc.data().input59 == "b" ? "input yellow" :
                doc.data().input59 == "B"?"input yellow" :
                    
                doc.data().input59 == "w" ? "input green" :
                doc.data().input59 == "W"?"input green" :
    
                isNaN(doc.data().input59) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input59}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input60}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input61}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input62}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input63}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input64}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input65}" /></td>
    
        </tr>
    
        <tr align="center">
    
        <td class="tdinput">10</td>
        <td class="tdinput"><input id="input2" class="${      
                
            doc.data().input66 == "" ? "input white" :
    
                doc.data().input66 == "f" ? "input red" :
                doc.data().input66 == "F"?"input red" :
                    
                doc.data().input66 == "s" ? "input white"  :
                doc.data().input66 == "S"?"input white" :
                    
                doc.data().input66 == "b" ? "input yellow" :
                doc.data().input66 == "B"?"input yellow" :
                    
                doc.data().input66 == "w" ? "input green" :
                doc.data().input66 == "W"?"input green" :
    
                isNaN(doc.data().input66) == false?"input green" : 'input'
                    
        
    }" type="text" value="${doc.data().input66}" onchange="tagPinColor(event)" maxlength="1"/></td>
        <td><input id="input3" class="input" type="text" value="${doc.data().input67}" /></td>
        <td><input id="input4" class="input" type="text" value="${doc.data().input68}" /></td>
        <td><input id="input5" class="input" type="text" value="${doc.data().input69}" /></td>
        <td><input id="input6" class="input" type="text" value="${doc.data().input70}" /></td>
        <td><input id="input7" class="input rectriangleWidth" type="text" value="${doc.data().input71}" /></td>
        <td><input id="input8" class="input" type="text" value="${doc.data().input72}" /></td>
    
        </tr>
    
        
    </tbody>
    
        <br />
            
        <button id="updateDoc" onclick="updateDocument(event, 'DP${doc.id}', '${doc.id}', 'table4')">Update</button>`
    ;
    document.getElementById('tableData4').innerHTML += div;
    
                })
            }

// Tables





// PDF Downloader


// const downloadSheet = (e) => {
//     const elementMonth = e.target.parentElement.parentElement.parentElement.previousElementSibling.parentElement.attributes[0].value;
//     const centerElement = document.getElementsByTagName('center')

//     document.getElementsByClassName('div')[0].className = 'hidden';
//     document.getElementById('signout').className = 'hidden'
//     document.getElementsByTagName('h1')[0].className = 'hidden';

//     centerElement.forEach(event => {
//         if(event.attributes[0].value.indexOf(elementMonth) > -1 == true){
//             event.className = '';
//             var opt = {
//                 margin:       0,
//                 filename:     'myfile.pdf',
//                 html2canvas:  { scale: 1 , width: 1500, height: 7000,},
//                 jsPDF:        { unit: 'in', format: 'tabloid', orientation: 'p' },
//                 enableLinks:  true,
//               };
//             html2pdf(event, opt);
//             setTimeout(() => {
//                 window.open('./index.html', '_self');
//             }, 20000);
//         }else{
//         event.className = 'hidden';

//         }
//     });
    
    
    
// }

// window.downloadSheet = downloadSheet;

// PDF Downloader
