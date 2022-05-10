<template>
  <div class="container-fluid" style="background-color:aquamarine">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3>ระบบรับสมัครนักศึกษาระดับปริญญาโท</h3>
          <h2>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h2>
        </div>
        <div class="col-12">
          <div class="card" style="padding:1%">
            <h3 class="text-center">ค้นหาหลักสูตรที่เปิด</h3>
            <div class="row">
              <div class="col-6">
                <label>ค้นหา 'คณะ'</label>
                <select class="form-select" aria-label="Default select example" v-model="resultfac">
                  <option value="อุตสาหกรรมอาหาร">อุตสาหกรรมอาหาร</option>
                  <option value="ครุศาสตร์อุตสาหกรรมและเทคโนโลยี">ครุศาสตร์อุตสาหกรรมและเทคโนโลยี</option>
                  <option value="แพทยศาสตร์">แพทยศาสตร์</option>
                  <option value="สถาปัตยกรรม ศิลปะและการออกแบบ">สถาปัตยกรรม ศิลปะและการออกแบบ</option>
                  <option value="เทคโนโลยีการเกษตร">เทคโนโลยีการเกษตร</option>
                  <option value="วิทยาศาสตร์">วิทยาศาสตร์</option>
                  <option value="เทคโนโลยีสารสนเทศ">เทคโนโลยีสารสนเทศ</option>
                  <option value="เทคโนโลยีและนวัตกรรมวัสดุ">เทคโนโลยีและนวัตกรรมวัสดุ</option>
                  <option value="วิทยาเขตชุมพรอุดมศักดิ์">วิทยาเขตชุมพรอุดมศักดิ์</option>
                  <option value="บริหารธุรกิจ">บริหารธุรกิจ</option>
                  <option value="ศิลปศาสตร์">ศิลปศาสตร์</option>
                  <option value="วิศวกรรมศาสตร์">วิศวกรรมศาสตร์</option>
                  <option value="นวัตกรรมการผลิตขั้นสูง">นวัตกรรมการผลิตขั้นสูง</option>
                  <option value="วิศวกรรมสังคีต">วิศวกรรมสังคีต</option>
                </select>
              </div>
              <div class="col-6">
                <label>ค้นหา 'รอบรับสมัคร'</label>
                <select class="form-select" aria-label="Default select example" v-model="resultround">
                  <option value="(1/2565) รอบ 1 - รับสมัครประจำภาคการศึกษา">(1/2565) รอบ 1 - รับสมัครประจำภาคการศึกษา</option>
                  <option value="(1/2565) รอบ 1 - รับสมัครแบบเลือกเข้าศึกษาในภาคการศึกษาที่ต้องการ">(1/2565) รอบ 1 - รับสมัครแบบเลือกเข้าศึกษาในภาคการศึกษาที่ต้องการ</option>
                  <option value="(2/2565) รอบ 1 - รับสมัครประจำภาคการศึกษา">(2/2565) รอบ 1 - รับสมัครประจำภาคการศึกษา</option>
                </select>
              </div>
              <div class="col-6">
                <label>ค้นหา 'โครงการ'</label>
                <select class="form-select" aria-label="Default select example" v-model="resultorg">
                  <option value="โครงการ รับเข้า 1/2565 คณะอุตสาหกรรมอาหาร (โครงการแววนวัตกร)">โครงการ รับเข้า 1/2565 คณะอุตสาหกรรมอาหาร (โครงการแววนวัตกร)</option>
                  <option value="โครงการ รับเข้า 1/2565 คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี">โครงการ รับเข้า 1/2565 คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-6">
                <label>ค้นหาหลักสูตร ไทย / นานาชาติ</label>
                <select class="form-select" aria-label="Default select example" v-model="resultlak">
                  <option value="หลักสูตรไทย">หลักสูตรไทย</option>
                  <option value="หลักสูตรนานาชาติ">หลักสูตรนานาชาติ</option>
                </select>
              </div>
              <div class="col-12">
                <label>คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ) [ระบบจะค้นจากชื่อคณะ,หลักสูตร]</label>
                <input type="text" class="form-control" v-model="resultsearch">
              </div>
              <div class="col-4" style="padding-top:5px">
                <button v-on:click="Submit" class="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="padding-top: 3%; padding-bottom: 3%;">
        <div class="col-12" v-for="item in resData" :key="item.id">
          <h1>ผลการค้นหา: {{resData.length}}</h1>
          <div class="card" style="padding: 1%">
            <h3>หลักสูตร: {{item.name}}</h3>
            <p>คณะ{{item.tag.faculity}}</p>
            <p>หลักสูตร{{item.tag.course}}</p>
            <p>วันที่เปิดรับสมัคร :{{item.date}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  data(){
    return{
      resultfac: "",
      resultround: "",
      resultorg: "",
      resultlak: "",
      resultsearch: "",
      resData : []
    }
  },
  methods:{
    Submit(){
      axios.get("http://localhost:3000/result?faculty="+this.resultfac+"&round="+this.resultround+"&org="+this.resultorg+"&lak="+this.resultlak+"&search="+this.resultsearch)
      .then((res)=>{
        this.resData.push(res.data)
        console.log(res.data)
      })
    }
  }
};
</script>