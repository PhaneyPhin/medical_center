import Api from '@/service/api'
import axios from 'axios'
// import Axios from 'axios';

export default {
    getData (url) {
        return new Promise((resolve,reject)=>{
          Api().get(url).then(result=>{
            resolve(result.data);
          },err=>{
            reject(err);
          });
        })
    },
    postData(url,data){
      return new Promise((resolve,reject)=>{
        Api().post(url,JSON.stringify(data)).then(result=>{
          resolve(result.data);
        },err=>{
          reject(err);
        });
      })
    },
    deleteData(url){
      return new Promise((resolve,reject)=>{
        Api().delete(url).then(result=>{
          resolve(result.data);
        },err=>{
          reject(err);
        });
      })
    },
    getExternalData(url){
      return new Promise((resolve,reject)=>{
        axios.create({
          baseURL: `http://203.150.210.26:3004/`,
          withCredentials: false,
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnZW5fdG9rZW4iOnsidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiIxIn0sImlhdCI6MTU2MzYxNzE1MiwiZXhwIjoxNjYzNjE3MTUxfQ.m_ko3pgVjwUOeRCiNNGoeXPge7LusJinaNnZNNTS7qg'
          }
        }).get(url).then((result)=>{
          resolve(result.data)
        },err=>{
          reject(err);
        })
      })
    },
    prefixs:[
      {id:1,th:"นาย",en:"Mr"},
      {id:2,th:"นางสาว",en:"Miss"}
    ],
    religions:[
      {id:1,th:"ศาสนาพุทธ",en:"Buddhism"},
      {id:2,th:"ศาสนาอิสลาม",en:"Islam"},
      {id:3,th:"ศาสนาฮินดู",en:"Hindu"},
      {id:4,th:"ศาสนาคริสต์",en:"Christ"},
      {id:5,th:"อื่นๆ",en:"Other"}
    ],
    blood_groups:[
      {value:"",text:""},
      {value:1,text:"A"},
      {value:2,text:"B"},
      {value:3,text:"O"},
      {value:4,text:"AB"},
      {value:5,text:"A+"},
      {value:6,text:"B+"},
      {value:7,text:"O+"},
      {value:8,text:"AB+"},
      {value:9,text:"A-"},
      {value:10,text:"B-"},
      {value:11,text:"O-"},
      {value:12,text:"AB-"}
    ],
    treeatment_rights:[
      {value:"",text:""},
      {value:1,text:"ไม่มีหลักประกัน"},
      {value:2,text:"ประกันสุขภาพถ้วนหน้า"},
      {value:3,text:"ข้าราชการ"},
      {value:4,text:"รัฐวิสาหกิจ"},
      {value:5,text:"ประกันสังคม"},
      {value:6,text:"ประกันชีวิต"}
    ],
    under_status:[
      {value:"",text:""},
      {value:0,text:"ในสังกัด"},
      {value:1,text:"นอกสังกัด"}
    ],
    hospital_types:[
      {value:"",text:""},
      {value:0,text:"โรงพยาบาลทั่วไป"},
      {value:1,text:"โรงพยาบาลเฉพาะทาง"}
    ],
    congenital_diseases:[
      "เบาหวาน","ความดันโลหิตสูง","หัวใจ","หอบหืด","โรคไต","โรคมะเร็ง","อื่นๆ"
    ],
    serious_illness_types:[
      "อุบัติเหตุ","โรคร้ายแรง","ไม่มี"
    ],
    reporter_type: [
      { id: 1, value: "reported_from_civil" },
      { id: 2, value: "narenlet_operation_unit" },
      { id: 3, value: "ems" },
      { id: 4, value: "voluteer" },
      { id: 5, value: "etc" },
    ],
    how_to_report:[
      { id: 1, value:"talkie_walkie" },
      { id: 2, value:"tel_1646" },
      { id: 3, value:"tel_1669" },
      { id: 4, value:"etc" },
    ],
    event_type:[
      { id: 1, value:"sick" },
      { id: 2, value:"traffic_accident" },
      { id: 3, value:"other_accident" },
      { id: 4, value:"disaster" },
    ],
    reasons:[
      {id:1,value:"เจ้าหน้าที่ติดภารกิจ"},
      {id:2,value:"รถพยาบาลติดภารกิจ"},
      {id:3,value:"สาเหตุอื่นๆ"}

    ],
    reason_hospitals:[
      {id:1,value:"มีผู้ป่วยจำนวนมากในห้องฉุกเฉิน"},
      {id:2,value:"เตียงเต็ม"},
      {id:3,value:"ไม่มีเพทย์เฉพาะทาง"},
      {id:4,value:"สารเหตุอื่น"}

    ],
}
