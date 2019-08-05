// import Api from '@/service/api'
import axios from 'axios'
// import { read } from 'fs';
// import Axios from 'axios';
import moment from "moment";
export default {
  url:`http://203.150.210.26:3007/`,
  // url: `http://10.255.248.92:3007/`,
  getData(url) {
    return new Promise((resolve, reject) => {
      axios.create({
        baseURL: this.url,
        withCredentials: false,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': this.getToken()
        }
      }).get(url).then(result => {
        resolve(result.data);
      }, err => {
        reject(err);
      });
    })
  },
  postData(url, data) {
    return new Promise((resolve, reject) => {
      axios.create({
        baseURL: this.url,
        withCredentials: false,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.getToken()
        }
      }).post(url, JSON.stringify(data)).then(result => {
        resolve(result.data);
      }, err => {
        reject(err);
      });
    })
  },
  deleteData(url) {
    return new Promise((resolve, reject) => {
      axios.create({
        baseURL: this.url,
        withCredentials: false,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.getToken()
        }
      }).delete(url).then(result => {
        resolve(result.data);
      }, err => {
        reject(err);
      });
    })
  },
  getExternalData(url) {
    return new Promise((resolve, reject) => {
      axios.create({
        baseURL: `http://203.150.210.26:3004/`,
        withCredentials: false,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnZW5fdG9rZW4iOnsidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiIxIn0sImlhdCI6MTU2MzYxNzE1MiwiZXhwIjoxNjYzNjE3MTUxfQ.m_ko3pgVjwUOeRCiNNGoeXPge7LusJinaNnZNNTS7qg'
        }
      }).get(url).then((result) => {
        resolve(result.data)
      }, err => {
        reject(err);
      })
    })
  },
  prefix: "xsdfjksldfjlsdfkjsldfkj",
  tokenText: "getmytoken",
  setToken(token) {
    sessionStorage.setItem(this.tokenText, this.prefix + token);
  },
  isTokenExpire() {
    let token = this.getUser()
    return !(moment(token.exp).isAfter(moment()))
  },
  getToken() {
    var token = sessionStorage.getItem(this.tokenText);
    if (token) {
      return token.substr(this.prefix.length);
    } else {
      return "";
    }

  },
  getUser() {
    return this.decodeToken(this.getToken());
  },
  isLoggedIn() {
    // alert(2222)
    // alert((this.prefix+this.getToken()))
    return (this.checkLogin(this.prefix + this.getToken()))


  },
  checkLogin(token) {
    // var token="203.150.210.26:3007/login?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnZW5fdG9rZW4iOnsidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiIxIn0sImlhdCI6MTU2MzYxNzE1MiwiZXhwIjoxNjYzNjE3MTUxfQ.m_ko3pgVjwUOeRCiNNGoeXPge7LusJinaNnZNNTS7qg";


    if (this.decodeToken(token.substr(this.prefix.length))) {
      return true;
    }
    return false;
  },
  // decodeToken(token){
  //   try{
  //     var playload = JSON.parse(atob(token.split('.')[1]));
  //     return playload;
  //   }catch(e){
  //     return "";
  //   }

  // },

  decodeToken(token) {
    try {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch (e) {
      return "";
    }
  },
  roles:[
    {id:"1",name:"admin"},
    {id:"2",name:"call_center"},
    {id:"3",name:"operator"}
  ],
  prefixs: [
    { id: 1, th: "นาย", en: "Mr" },
    { id: 2, th: "นางสาว", en: "Miss" }
  ],
  religions: [
    { id: 1, th: "ศาสนาพุทธ", en: "Buddhism" },
    { id: 2, th: "ศาสนาอิสลาม", en: "Islam" },
    { id: 3, th: "ศาสนาฮินดู", en: "Hindu" },
    { id: 4, th: "ศาสนาคริสต์", en: "Christ" },
    { id: 5, th: "อื่นๆ", en: "Other" }
  ],
  car_type: [
    { value: 0, text: "ALS" },
    { value: 1, text: "BLS" }
  ],
  blood_groups: [
    { value: "", text: "" },
    { value: 1, text: "A" },
    { value: 2, text: "B" },
    { value: 3, text: "O" },
    { value: 4, text: "AB" },
    { value: 5, text: "A+" },
    { value: 6, text: "B+" },
    { value: 7, text: "O+" },
    { value: 8, text: "AB+" },
    { value: 9, text: "A-" },
    { value: 10, text: "B-" },
    { value: 11, text: "O-" },
    { value: 12, text: "AB-" }
  ],
  treeatment_rights: [
    { value: 1, text: "ไม่มีหลักประกัน" },
    { value: 2, text: "ประกันสุขภาพถ้วนหน้า" },
    { value: 3, text: "ข้าราชการ" },
    { value: 4, text: "รัฐวิสาหกิจ" },
    { value: 5, text: "ประกันสังคม" },
    { value: 6, text: "ประกันชีวิต" }
  ],
  under_status: [
    { value: "", text: "" },
    { value: 0, text: "ในสังกัด" },
    { value: 1, text: "นอกสังกัด" }
  ],
  hospital_types: [
    { value: "", text: "" },
    { value: 0, text: "โรงพยาบาลทั่วไป" },
    { value: 1, text: "โรงพยาบาลเฉพาะทาง" }
  ],
  congenital_diseases: [
    "เบาหวาน", "ความดันโลหิตสูง", "หัวใจ", "หอบหืด", "โรคไต", "โรคมะเร็ง", "อื่นๆ"
  ],
  serious_illness_types: [
    "อุบัติเหตุ", "โรคร้ายแรง", "ไม่มี"
  ],
  reporter_type: [
    { id: 1, value: "reported_from_civil" },
    { id: 2, value: "narenlet_operation_unit" },
    { id: 3, value: "ems" },
    { id: 4, value: "voluteer" },
    { id: 5, value: "etc" },
  ],
  how_to_report: [
    { id: 1, value: "talkie_walkie" },
    { id: 2, value: "tel_1646" },
    { id: 3, value: "tel_1669" },
    { id: 4, value: "etc" },
  ],
  event_type: [
    { id: 1, value: "sick" },
    { id: 2, value: "traffic_accident" },
    { id: 3, value: "other_accident" },
    { id: 4, value: "disaster" },
  ],
  reasons: [
    { id: 1, value: "เจ้าหน้าที่ติดภารกิจ" },
    { id: 2, value: "รถพยาบาลติดภารกิจ" },
    { id: 3, value: "สาเหตุอื่นๆ" }

  ],
  reason_hospitals: [
    { id: 1, value: "มีผู้ป่วยจำนวนมากในห้องฉุกเฉิน" },
    { id: 2, value: "เตียงเต็ม" },
    { id: 3, value: "ไม่มีเพทย์เฉพาะทาง" },
    { id: 4, value: "สารเหตุอื่น" }

  ],
  screenings: [
    { id: 1, level_text: "red", screening_color: "bg-danger" },
    { id: 2, level_text: "yellow", screening_color: "bg-warning" },
    { id: 3, lavel_text: "green", screening_color: "bg-success" },
    { id: 4, level_text: "white", screening_color: "" },
    { id: 5, level_text: "black", screening_color: "" }
  ],
  content_types: [
    "ทางจิตเวช", "ปัญหาทางกรอบครัว", "ปัญหาทางเพศ", "ปัญหาการทำงาน", "ปัญหาการเรียน", "ปัญหาการปรับตัว", "ปัญหายสเสพติด", "ปัญหาพฤติกรรมเด็กวัยรุ่น", "โทรศัพธ์ลามก", "Silence Call", "ภาวะเครียด", "โรคทางกาย", "ปัญหาบริการต่าง ของโรงพยาบาล", "อื่นๆ"
  ],

  perform_results: [
    { value: "1", text: "ไม่ประส่งค์ไปโรงพยาบาล", type: "a" },
    { value: "2", text: "ไม่มีผู้บาดเจ็บ", type: "a" },
    { value: "3", text: "นอกพื้นที่กรุงเทพ", type: "a" },
    { valule: "4", text: "ประสานผ่านศูนย์จัดอาสาดำเนินการ", type: "a" },
    { value: "5", text: "รถเพียงพอแล้ว", type: "a" },
    { value: "6", text: "ประสารผ่านศูนย์จัดอาสารดำเนินการ", type: "a" },
    { value: "7", text: "แจ้งเท็จ", type: "b" },
    { value: "8", text: "มีการเคลื่อนย้ายไปก่อน", type: "b" },

  ],
  trauma_wounds: ["No", "Cut/Laceration", "Abrasion", "Contusion", "Burn", "Stab W", "GSW"],
  trauma_bones: ["No", "Close Fx", "Open Fx", "Dislocation"],
  trauma_bloods: ["No", "Ext Stopped", "Ext Active", "Int Haemorrhage"],
  trauma_bodys: ["No", "Head/Neck", "Face", "Spine", "Chest/Clavicle", "Abdomen", "pelvis", "Extremity", "Ext.BodySurface", "Multiple inj."],

  ntrauma_medicines: ["Dyspnea", "High fever", "Alteration of conscious", "Seizure", "CHest pain", "Digestive", "Poision", "Other"],
  ntrauma_obstetricians: ["Labour pain", "Bleeding per vigina", "High risk preg.", "Rape", "other"],
  ntrauma_childs: ["Convulsion", "High fever", "Dyspnea", "Digestive", "Other"],
  ntrauma_surgerys: ["Ac. Abd. Pain", "UGI Bleeding", "Other"],
  ntruama_others: ["Eyes", "ENT", "Ortho", "Psychological problem"],

  treatment_breaths: ["No", "Clear airway", "Oral airway", "Suction", "02 Cannular/mask", "AMBU bag", "ET"],
  treatment_wounds: ["No", "Pressure Dressing", "Dressing", "คลึงมดลูก", "Other"],
  treatment_waters: ["No", "NSS", "5%D/N/2", "RLS", "Other"],
  treatment_bones: ["No", "เฝือกลม/ไม้ดาม", "Collar with long spinal board", "KED"],
  treatment_cprs: ["No", "Yes", "AED/DF"],
  rc_codes: ["แดง (วิกฤต)", "เหลื่อง (เร่งด่วน)", "เขียว (ไม่รุ่นแรง)", "ขาว (ทั่วไป)", "ดำ (รับบริการสาธาณสุขอื่น)"],

  broken_bones: ["ไม่มีกระดูกหัก", "ข้อเคลื่อน", "บาดเจ็บกล้ามดเนื้อ", "ศรีษะ", "แขนท่อนบน", "ขาทอนบน", "ข้อหลุด", "เชิงกราง", "คอหลัง", "แขนท่อน", "คอ/หลัง", "แขนท่อนล่าง"],
  nation_list: [{ value: "thai" }, { value: "outlander" }, { value: "foreigner" }],
  treatment_right2: ["no_treatment_right", "golden_card", "health_insurance", "government_officer", "social_security", "registered_migrant_worker", "etc"],
  private_insurance: ["life_insurance", "trip_insurance"],
  sense_status: ["good_feeling", "slow_feeling", "can_wake", "knock_out", "frantic"],
  breathing_status: ["normal", "fast", "slow", "not_constant", "not_breath"],
  wound_status: ["no_wound", "scratch", "tearing", "stale", "burn", "shoted", "stabbed", "cut"],
  bone_status: ["no_broken_bone","joint_move","muscle_injury","head","face","upper_arm", "upper_leg","loose_joint","pelvis", "breast","neck_back","lower_arm","lower_leg"],
  treat_breath:["no_breath","clear_breath","use_oral_airway","give_o2_mask","ambu_bag","pocket_mask"],
  treat_bleed:["no_bleed","hemostasis","bandage"],
  treat_bone:["no_bone","wind_splint","long_back_board","ked"],
  cpr_status:["no_cpr","do_cpr","use_aed"],
  primary_results: ["no_treat", "palliative", "same", "collapsed", "die_at_accident", "die_during_send"],

}
