import React, { useState } from 'react';
import './App.css';
import img from './logo.png'
import axios from "axios";


function App1() {
  const [formData, setFormData] = useState({
    hoTen: '',
    gioiTinh: '',
    ngaySinh: '',
    noiSinh: '',
    danToc: '',
    tonGiao: '',
    hoKhau: '',
    noiTotNghiep: '',
    namTotNghiep: '',
    cmnd: '',
    ngayCap: '',
    noiCap: '',
    diaChiNhanh: '',
    dienThoai: '',
    dienThoaiPhuHuynh: '',
    nganhDangKy: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value
  });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/AddInfo', formData);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="App">
      <header>
      <table>
        <tr>
          <h2 style={{color:"red",textAlign:"center"}}>Chọn khác biệt chọn thành công</h2>  
        </tr>
        </table>
        <table>
    <tr>
      <th><img src={img} alt="logo" /></th>
      <th style={{color:"red"}}>Thành viên của tổ chức giáo dục EQuest</th>
    </tr>
    </table>
    <table>
    <tr>
      <td>
        <h1 style={{color:"red",textAlign:"left" }}>HỒ SƠ XÉT TUYỂN CAO ĐẲNG TRỰC TUYẾN</h1>
        <hr></hr>
       <h3 style={{color:"red",textAlign:"left",fontSize:"12px"}}> <div className='square'/>Các hạng mục hồ sơ bên dưới vui lòng điền đầy đủ thông tin</h3>
      </td>
    </tr>
  </table>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <section className="thong-tin-ca-nhan">
            <h2>THÔNG TIN CÁ NHÂN</h2>
            <div className="form-group-left">
              <label className="red-text" htmlFor="hoTen">Họ và tên:</label>
              <input
                type="text"
                name="hoTen"
                id="hoTen"
                value={formData.hoTen}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="gioiTinh">Giới tính:</label>
              <select
                name="gioiTinh"
                id="gioiTinh"
                value={formData.gioiTinh}
                onChange={handleChange}
                required
              >
                <option value="">Chọn giới tính</option>
                <option value="Nữ">Nữ</option>
                <option value="Nam">Nam</option>
              </select>
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="ngaySinh">Ngày sinh:</label>
              <input
                type="date"
                name="ngaySinh"
                id="ngaySinh"
                value={formData.ngaySinh}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiSinh">Nơi sinh:</label>
              <input
                type="text"
                name="noiSinh"
                id="noiSinh"
                value={formData.noiSinh}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="danToc">Dân tộc:</label>
              <input
                type="text"
                name="danToc"
                id="danToc"
                value={formData.danToc}
                onChange={handleChange}
                required
/>
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="tonGiao">Tôn giáo:</label>
              <input
                type="text"
                name="tonGiao"
                id="tonGiao"
                value={formData.tonGiao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="hoKhau">Hộ khẩu thường trú:</label>
              <input
                type="text"
                name="hoKhau"
                id="hoKhau"
                value={formData.hoKhau}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiTotNghiep">Nơi tốt nghiệp THCS hoặc THPT hoặc tương đương:</label>
              <input
                type="text"
                name="noiTotNghiep"
                id="noiTotNghiep"
                value={formData.noiTotNghiep}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="namTotNghiep">Năm tốt nghiệp:</label>
              <input
                type="number"
                name="namTotNghiep"
                id="namTotNghiep"
                value={formData.namTotNghiep}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="cmnd">Số chứng minh nhân dân:</label>
              <input
                type="text"
                name="cmnd"
                id="cmnd"
                value={formData.cmnd}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="ngayCap">Ngày cấp:</label>
              <input
                type="date"
                name="ngayCap"
                id="ngayCap"
                value={formData.ngayCap}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="noiCap">Nơi cấp:</label>
              <input
                type="text"
                name="noiCap"
                id="noiCap"
                value={formData.noiCap}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="diaChiNhanh">Địa chỉ liên lạc (nếu khác hộ khẩu):</label>
              <input
                type="text"
name="diaChiNhanh"
                id="diaChiNhanh"
                value={formData.diaChiNhanh}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="dienThoai">Điện thoại liên lạc:</label>
              <input
                type="tel"
                name="dienThoai"
                id="dienThoai"
                value={formData.dienThoai}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-left">
              <label className="red-text" htmlFor="dienThoaiPhuHuynh">Điện thoại phụ huynh (nếu có):</label>
              <input
                type="tel"
                name="dienThoaiPhuHuynh"
                id="dienThoaiPhuHuynh"
                value={formData.dienThoaiPhuHuynh}
                onChange={handleChange}
              />
            </div>
            <div className='form-group-left'>
            <h1 style={{color:"red"}} >NGÀNH ĐĂNG KÝ XÉT TUYỂN</h1>
              <ul className='red-text'>
            <li>
              <input type="radio" id="nganhDangKy" name="nganhDangKy" value="Digital Marketing" onChange={handleChange} checked={formData.nganhDangKy === "Digital Marketing"} />
              Digital Marketing{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Quản trị khách sạn" onChange={handleChange} checked={formData.nganhDangKy === "Quản trị khách sạn"} />
              Quản trị khách sạn{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Phiên dịch tiếng Anh thương mại" onChange={handleChange} checked={formData.nganhDangKy === "Phiên dịch tiếng Anh thương mại"} />
              Phiên dịch tiếng Anh thương mại{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="CNTT-Ứng dụng phần mềm" onChange={handleChange} checked={formData.nganhDangKy === "CNTT-Ứng dụng phần mềm"} />
              CNTT-Ứng dụng phần mềm{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Tiếng Hàn" onChange={handleChange} checked={formData.nganhDangKy === "Tiếng Hàn"} />
              Tiếng Hàn{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Chăm sóc sắc đẹp" onChange={handleChange} checked={formData.nganhDangKy === "Chăm sóc sắc đẹp"} />
              Chăm sóc sắc đẹp{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Tài chính đầu tư" onChange={handleChange} checked={formData.nganhDangKy === "Tài chính đầu tư"}/>
              Tài chính đầu tư{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Công nghệ ô tô" onChange={handleChange} checked={formData.nganhDangKy === "Công nghệ ô tô"}/>
              Công nghệ ô tô{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Thiết kế đồ họa" onChange={handleChange} checked={formData.nganhDangKy === "Thiết kế đồ họa"}/>
              Thiết kế đồ họa{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Quản trị bán hàng" onChange={handleChange} checked={formData.nganhDangKy === "Quản trị bán hàng"}/>
              Quản trị bán hàng{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Quản trị doanh nghiệp" onChange={handleChange}checked={formData.nganhDangKy === "Quản trị doanh nghiệp"} />
              Quản trị doanh nghiệp{" "}
            </li>
            <li><input type="radio" name="nganhDangKy" value="Quản lý công nghiệp" onChange={handleChange} checked={formData.nganhDangKy === "Quản lý công nghiệp"}/>
              Quản lý công nghiệp{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Tiếng Nhật" onChange={handleChange} checked={formData.nganhDangKy === "Tiếng Nhật"}/>
              Tiếng Nhật{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="logistics" onChange={handleChange} checked={formData.nganhDangKy === "logistics"}/>
              logistics{" "}
            </li>
            <li>
              <input type="radio" name="nganhDangKy" value="Tiếng Trung" onChange={handleChange} checked={formData.nganhDangKy === "Tiếng Trung"}/>
              Tiếng Trung{" "}
            </li>
            </ul>
    </div>
    <p style={{color:'red',textAlign:'center',fontWeight:'inherit'}}><i>Tôi cam đoan những lời khai trong phiếu DKXT này là đúng sự thật, nếu sai tôi chấp nhận chịu xử lý theo Quy chế tuyển sinh</i></p>
          </section>
          <button type="submit" style={{textAlign:'center'}}>Đăng ký </button>
        </form>
      </main>
    </div>
  )
}

export default App1;

