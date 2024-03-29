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
    const {  checked } = e.target;
    const newNganhDangKy = [...formData.nganhDangKy];

    if (checked) {
      newNganhDangKy.push(name);
    } else {
      const index = newNganhDangKy.indexOf(name);
      newNganhDangKy.splice(index, 1);
    }

    setFormData({
      ...formData,
      [name]: value,
      nganhDangKy: newNganhDangKy 
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
    console.log(formData);
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
            <h1>NGÀNH ĐĂNG KÝ XÉT TUYỂN </h1>
            <div className='form-group-left'>
            <form onSubmit={handleSubmit}>
          {nganhHocList.map((nganh) => (
            <div className="form-group" key={nganh.maNganh}>
              <label for={nganh.maNganh}>{nganh.tenNganh}</label>
              <input
                type="checkbox"
                name={nganh.maNganh}
                id={nganh.maNganh}
                onChange={handleChange}
              />
            </div>
          ))}
          </form>
            </div>

          </section>
          <button type="submit">Nộp hồ sơ</button>
        </form>
      </main>
    </div>
  );
}

export default App1;
const nganhHocList = [
    {
      maNganh: "digital-marketing",
      tenNganh: "Digital Marketing",
    },
    {
      maNganh: "thiet-ke-do-hoa",
      tenNganh: "Thiết kế đồ họa",
    },
    {
        maNganh: "quan-tri-ban-hang",
        tenNganh: "Quản trị bán hàng",
      },
      {
        maNganh: "quan-tri-doanh-nghiep",
        tenNganh: "Quản trị doanh nghiệp",
      },
      {
        maNganh: "cham-soc-sac-dep",
        tenNganh: "Chăm sóc sắc đẹp",
      },
      {
        maNganh: "tieng-trung",
        tenNganh: "Tiếng trung",
      },
      {
        maNganh: "tieng-han",
        tenNganh: "Tiếng Hàn",
      },
      {
        maNganh: "tieng-nhat",
        tenNganh: "Tiếng Nhật",
      },
  ];
