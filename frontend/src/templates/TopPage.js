import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Typography } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";

const TopPage = () => {
  const element = <FontAwesomeIcon icon={faCoffee} />;
  const icon = <FontAwesomeIcon icon={faFacebook} />;
  return (
    <div>
      {/* Luyện tập về thuộc tinh Flex */}
      <Typography variant="h3" contact="h3" align="center">
        Luyện tập về thuộc tinh Flex
      </Typography>
      <section className="llflex1">
        <div className="llflex1_cha">
          <div className="llflex1_con">
            Et habitant, ultricies incididunt et numquam, atque sagittis
            doloremque fusce accumsan
          </div>
        </div>
      </section>

      <section className="llflex2">
        <div className="llflex2to">
          <div className="_2k1trai">
            <a href="" className="_2k1">
              <div className="noidung_2k1">
                <i>
                  <CastForEducationIcon fontSize="large" />
                </i>
                <span>Top Python Course</span>
              </div>
            </a>
          </div>
          <div className="_2k1phai">
            <a href="" className="_2k1 k11 phai1">
              <div className="noidung_2k1">
                <i>
                  <CastForEducationIcon fontSize="large" />
                </i>
                <span>Top Python Course</span>
              </div>
            </a>
            <a href="" className="_2k1 k12 phai1">
              <div className="noidung_2k1">
                <i>
                  <CastForEducationIcon fontSize="large" />
                </i>
                <span>Top Python Course</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* END Luyện tập về thuộc tinh Flex */}

      {/* Thuoc tinh Fex */}
      <Typography variant="h3" contact="h3" align="center">
        Thuoc tinh FLEX
      </Typography>
      <section className="ttflex">
        <div className="ttfex_vd1">
          <div className="ttfex_vd1--khoi1 k1">1</div>
          <div className="ttfex_vd1--khoi2 k1">2</div>
          <div className="ttfex_vd1--khoi3 k1">3</div>
          <div className="ttfex_vd1--khoi4 k1">4 </div>
          <div className="ttfex_vd1--khoi5 k1">5</div>
          <div className="ttfex_vd1--khoi6 k1">6</div>
          <div className="ttfex_vd1--khoi7 k1">7 </div>
        </div>
      </section>

      {/* END Fex */}

      {/* Chữa bài xinhxinh.vn */}
      <Typography variant="h3" contact="h3">
        Chữa bài xinhxinh.vn(position: absolute;top:0px;left:0px +
        position:relative)
      </Typography>
      <section className="xinhxinh.vn">
        <div className="xx_sample">
          <img src="/static/images/xx1.jpeg" />
          <a href="" className="xx_tieude">
            16+ màu tóc nhuộm siêu phẩm mà nàng không thể bỏ lỡ
          </a>
        </div>
        <div className="xx_sample">
          <img src="/static/images/xx1.jpeg" />
          <a href="" className="xx_tieude">
            16+ màu tóc nhuộm siêu phẩm mà nàng không thể bỏ lỡ
          </a>
        </div>
        <div className="xx_sample">
          <img src="/static/images/xx1.jpeg" />
          <a href="" className="xx_tieude">
            16+ màu tóc nhuộm siêu phẩm mà nàng không thể bỏ lỡ
          </a>
        </div>
      </section>
      {/* END xinhxinh.vn */}

      {/* Chữa bài Saga.vn */}
      <Typography variant="h3" contact="h3">
        Chữa bài Saga.vn
      </Typography>
      <section className="sagavn">
        <div className="sg_banner">
          <a href="">
            <img src="/static/images/saga_banner.jpeg" />
          </a>
        </div>
        <div className="sg_tag-menu">
          <a href="">
            <span>Saga</span> | Nhan dinh
          </a>
        </div>
        <div className="sg_canhgiua">
          <div className="sg_noidung">
            <div className="sg_tdto">Nhan dinh</div>
            <div className="sg_kthongtin">
              <a href="">
                <img src="/static/images/sg_tt1.jpeg" />
              </a>
              <a href="" className="sg_tdthongtin">
                NGÂN SÁCH, KÊNH PHÂN PHỐI VÀ CÔNG NGHỆ:
              </a>
              <div className="sg_tg">Bởi Vũ Minh Tuấn - 17/02/2021 - 17:20</div>
              <p>
                Công ty Cổ phần dịch vụ thông tin kinh tế và tài chính (Fine
                Intelligence) được thành lập vào năm 2007 nhằm đáp ứng nhu cầu
                của thị trường tài chính v ...
              </p>
            </div>
            <div className="sg_kthongtin sg_ktinnho">
              <a href="">
                <img src="/static/images/sg_tt1.jpeg" />
              </a>
              <a href="" className="sg_tdthongtin">
                NGÂN SÁCH, KÊNH PHÂN PHỐI VÀ CÔNG NGHỆ:
              </a>
              <div className="sg_tg">Bởi Vũ Minh Tuấn - 17/02/2021 - 17:20</div>
              <p>
                Công ty Cổ phần dịch vụ thông tin kinh tế và tài chính (Fine
                Intelligence) được thành lập vào năm 2007 nhằm đáp ứng nhu cầu
                của thị trường tài chính v ...
              </p>
            </div>
            <div className="sg_kthongtin sg_ktinnho">
              <a href="">
                <img src="/static/images/sg_tt1.jpeg" />
              </a>
              <a href="" className="sg_tdthongtin">
                NGÂN SÁCH, KÊNH PHÂN PHỐI VÀ CÔNG NGHỆ:
              </a>
              <div className="sg_tg">Bởi Vũ Minh Tuấn - 17/02/2021 - 17:20</div>
              <p>
                Công ty Cổ phần dịch vụ thông tin kinh tế và tài chính (Fine
                Intelligence) được thành lập vào năm 2007 nhằm đáp ứng nhu cầu
                của thị trường tài chính v ...
              </p>
            </div>
            <div className="sg_kthongtin sg_ktinnho">
              <a href="">
                <img src="/static/images/sg_tt1.jpeg" />
              </a>
              <a href="" className="sg_tdthongtin">
                NGÂN SÁCH, KÊNH PHÂN PHỐI VÀ CÔNG NGHỆ:
              </a>
              <div className="sg_tg">Bởi Vũ Minh Tuấn - 17/02/2021 - 17:20</div>
              <p>
                Công ty Cổ phần dịch vụ thông tin kinh tế và tài chính (Fine
                Intelligence) được thành lập vào năm 2007 nhằm đáp ứng nhu cầu
                của thị trường tài chính v ...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* END Saga.vn */}

      {/* Chữa bài Giadinh.net */}
      <Typography variant="h3" contact="h3">
        Chữa bài Giadinh.net
      </Typography>

      <section className="giadinh">
        <div className="gd_tieude">
          <a href="" className="gd_linktd">
            Gia dinh
          </a>
          <div className="gd_vien"></div>
        </div>
        <div className="gd_tin">
          <a href="">
            <img src="/static/images/giadinh.webp" />
          </a>
          <a href="" className="gd_tdtin">
            Trần tình của nữ tài xế đi lùi xe trên cao tốc sau khi bị nghi "thế
            thân" cho 1 người đàn ông
          </a>
          <p>
            GiadinhNet - Sau khi thông tin xử phạt nữ tài xế đi lùi trên cao
            tốc, nhiều người cho rằng người phụ nữ này "thế thân" cho nam tài xế
            vi phạm bởi do clip trông... rất...
          </p>
        </div>
        <div className="gd_dstin">
          <ul>
            <li>
              <a href="">
                TP.HCM: Nữ sinh lớp 12 bị xe buýt cán tử vong, cha ôm thi thể
                con ngồi khóc khiến ai cũng xót xa
              </a>
            </li>
            <li>
              <a href="">
                Cho nước mắm vào canh, người phụ nữ bị mẹ chồng mỉa mai 'nhà
                quê' và dòng tin nhắn 'giẫm vào đuôi' của chồng
              </a>
            </li>
            <li>
              <a href="">Làm sao để hấp dẫn trong mắt chàng?</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="giadinh">
        <div className="gd_tieude">
          <a href="" className="gd_linktd">
            Gia dinh
          </a>
          <div className="gd_vien"></div>
        </div>
        <div className="gd_tin">
          <a href="">
            <img src="/static/images/giadinh.webp" />
          </a>
          <a href="" className="gd_tdtin">
            Trần tình của nữ tài xế đi lùi xe trên cao tốc sau khi bị nghi "thế
            thân" cho 1 người đàn ông
          </a>
          <p>
            GiadinhNet - Sau khi thông tin xử phạt nữ tài xế đi lùi trên cao
            tốc, nhiều người cho rằng người phụ nữ này "thế thân" cho nam tài xế
            vi phạm bởi do clip trông... rất...
          </p>
        </div>
        <div className="gd_dstin">
          <ul>
            <li>
              <a href="">
                TP.HCM: Nữ sinh lớp 12 bị xe buýt cán tử vong, cha ôm thi thể
                con ngồi khóc khiến ai cũng xót xa
              </a>
            </li>
            <li>
              <a href="">
                Cho nước mắm vào canh, người phụ nữ bị mẹ chồng mỉa mai 'nhà
                quê' và dòng tin nhắn 'giẫm vào đuôi' của chồng
              </a>
            </li>
            <li>
              <a href="">Làm sao để hấp dẫn trong mắt chàng?</a>
            </li>
          </ul>
        </div>
      </section>

      {/* END Giadinh.net */}

      {/* Chữa bài Marry.vn */}
      <Typography variant="h3" contact="h3">
        Chữa bài Marry.vn
      </Typography>
      <section className="marryvn">
        <div className="marry_tren">
          <a href="" className="mr_tdto">
            Ao cuoi dep
          </a>
          <a href="" className="mr_xt">
            xem them <ArrowRightAltIcon />
          </a>
          <i class="fas fa-arrow-right"></i>
        </div>
        <div className="mr_icon">
          <div className="_1icon">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
          <div className="_1icon _so2">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
          <div className="_1icon">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
          <div className="_1icon">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
          <div className="_1icon">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
        </div>
        <div className="mr_3tin">
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
        </div>
      </section>
      <section className="marryvn">
        <div className="marry_tren">
          <a href="" className="mr_tdto">
            Ao cuoi dep
          </a>
          <a href="" className="mr_xt">
            xem them <ArrowRightAltIcon />
          </a>
          <i class="fas fa-arrow-right"></i>
        </div>
        <div className="mr_icon">
          <div className="_1icon">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
          <div className="_1icon _so2">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
          <div className="_1icon">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
          <div className="_1icon">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
          <div className="_1icon">
            <a href="" className="chuaicon"></a>
            <a href="" className="linkicon">
              Vay xeo
            </a>
          </div>
        </div>
        <div className="mr_3tin">
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
          <div className="mr_1tin">
            <a href="">
              <img src="/static/images/mr_tin1.jpeg" />
            </a>
            <a href="" className="mr_1tin--td">
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời?
            </a>
            <p>
              Hình dung về đám cưới của bạn. Bạn thích tổ chức trong nhà hay
              ngoài trời? Sang trọng hay tiết kiệm? Chúng tôi sẽ giúp bạn tìm
              kiếm đúng nhà cung cấp mà bạn cần.
            </p>
          </div>
        </div>
      </section>
      {/* END Marry.vn */}
      <div>
        {/* Phan 3: Hoc cach cat web qua tung bai tap
      Su dung font icon va hieu ung hover the nao */}
        <Typography variant="h3" contact="h3">
          Phan 3: Hoc cach cat web qua tung bai tap
        </Typography>
        <section className="khoitinto-tinnho">
          <article className="tinto">
            <a href="">
              <img src={"static/images/3.jpeg"} />
            </a>
            <a href="" className="tdtinto">
              Như Phúc "Vòng Xoáy Tình Yêu" tổ chức sinh nhật tuổi 21 cho con
              gái
            </a>
            <div className="thongtin">
              <span>PHIM VIỆT</span> - 1 giờ trước
            </div>
            <p className="ndtinto">
              Mừng sinh nhật tuổi 21 cho con gái đầu, nhan sắc của cô bé và mẹ
              đặc biệt gây chú ý vì trông như hai chị em.
            </p>
            <a href="" className="tentg">
              Nguyen binh minh
            </a>
          </article>
          <article className="tinnho">
            <a>
              <img src={"static/images/2.jpeg"} />
            </a>
            <a href="" className="tdtinnho">
              Thu Trang bức xúc vì bị xuyên tạc bình luận tự nhận không cần khán
              giả
            </a>
            <div className="thongtin">
              <span>SAO VIỆT</span> - 3 giờ trước
            </div>
          </article>
          <article className="tinnho">
            <a>
              <img src={"static/images/2.jpeg"} />
            </a>
            <a href="" className="tdtinnho">
              Thu Trang bức xúc vì bị xuyên tạc bình luận tự nhận không cần khán
              giả
            </a>
            <div className="thongtin">
              <span>SAO VIỆT</span> - 3 giờ trước
            </div>
          </article>
        </section>
        <div className="face-test">
          <FacebookIcon color="action" fontSize="large" />
        </div>
        <div className="awesome">{element}</div>
        <div className="iconff">{icon}</div>
      </div>
      {/* END Phan 3:... */}

      {/* Chữa bài 4 megafun */}
      <Typography variant="h3" contact="h3">
        Chữa bài 4 megafun
      </Typography>
      <div className="b4-big">
        <div className="b4-tieude">
          <h2>Hap dan tren Megafun</h2>
        </div>
        <div className="_10tin">
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
          <div className="b4-tin">
            <a href="">
              <img src={"static/images/4.jpeg"} alt="b4-tin" />
            </a>
            <a href="" className="b4-tin__tieude">
              Song Hye Kyo lại 'gây sốt' với vẻ đẹp tựa nữ thần
            </a>
          </div>
        </div>
      </div>
      {/* END Bai 4 */}
      {/* Chữa bài 5 icon vnexpress */}
      <Typography variant="h3" contact="h3">
        Chữa bài 5 icon vnexpress
      </Typography>
      <div className="bai5">
        <div className="b5-tren">
          <a className="tdtren">
            <span>Lam dep</span>
          </a>
          <p className="tdtren__tag">Makeup | Toc | Dang dep</p>
        </div>
        <div className="b5-duoi">
          <div className="b5-trai">
            <div className="tintrai">
              <a href="" className="tdtintrai">
                Chuyên gia nói 'Harry thật trẻ con' và cuộc phỏng vấn podcast là
                sai lầm
              </a>
            </div>
          </div>
          <div className="b5-phai">
            <div className="phai-1tin">
              <a href="">
                <img src="/static/images/5.jpeg" />
              </a>
              <a href="" className="tdtinphai">
                Street style chất chơi khoe dáng của mỹ nhân Việt tuần qua
              </a>
              <p>
                Tổng hợp thông tin về các đợt sale lớn, gợi ý các điểm ăn chơi
                ngon, bổ, rẻ... chương trình giúp bạn tận dụng hiệu quả ngày
                cuối tuần vui vẻ.
              </p>
            </div>
            <div className="phai-1tin">
              <a href="">
                <img src="/static/images/5.jpeg" />
              </a>
              <a href="" className="tdtinphai">
                Street style chất chơi khoe dáng của mỹ nhân Việt tuần qua
              </a>
              <p>
                Tổng hợp thông tin về các đợt sale lớn, gợi ý các điểm ăn chơi
                ngon, bổ, rẻ... chương trình giúp bạn tận dụng hiệu quả ngày
                cuối tuần vui vẻ.
              </p>
            </div>
            <div className="phai-1tin">
              <a href="">
                <img src="/static/images/5.jpeg" />
              </a>
              <a href="" className="tdtinphai">
                Street style chất chơi khoe dáng của mỹ nhân Việt tuần qua
              </a>
              <p>
                Tổng hợp thông tin về các đợt sale lớn, gợi ý các điểm ăn chơi
                ngon, bổ, rẻ... chương trình giúp bạn tận dụng hiệu quả ngày
                cuối tuần vui vẻ.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END Bai 5 */}
      {/* Chữa bài docbao.vn */}
      <Typography variant="h3" contact="h3">
        Chữa bài docbao.vn
      </Typography>
      <section className="docbao">
        <div className="docbaotren">
          <a href="">Sao 360°</a>
        </div>
        <div className="docbaoduoi">
          <div className="docbaotrai">
            <a href="">
              <img src="/static/images/docbao1.png" />
            </a>
            <a href="" className="dbtrai__tieude">
              Bà Phương Hằng 'mạt sát' giới showbiz: Loạt nghệ sĩ bức xúc, kêu
              gọi chính quyền vào cuộc
            </a>
            <p className="docbaotrai__nd">
              "Với tư cách một nghệ sĩ, tôi xin kêu gọi các bạn đồng nghiệp, các
              hội đoàn nghệ sĩ và chính quyền hãy vào cuộc để lấy lại thanh danh
              cho nghệ sĩ", diễn viên Huỳnh Kiến An bày tỏ.
            </p>
          </div>
          <div className="docbaophai">
            <div className="docbao-1tin">
              <a href="">
                <img src="/static/images/docbao2.png" />
              </a>
              <a href="" className="_1tin_td">
                Trang truyền thông hàng đầu xứ Trung gọi Chi Pu là 'Đệ nhất mỹ
                nhân Việt Nam', đăng ảnh gợi cảm với lời nhận xét bất ngờ
              </a>
            </div>
            <div className="docbao-1tin">
              <a href="">
                <img src="/static/images/docbao2.png" />
              </a>
              <a href="" className="_1tin_td">
                Trang truyền thông hàng đầu xứ Trung gọi Chi Pu là 'Đệ nhất mỹ
                nhân Việt Nam', đăng ảnh gợi cảm với lời nhận xét bất ngờ
              </a>
            </div>
            <div className="docbao-1tin">
              <a href="">
                <img src="/static/images/docbao2.png" />
              </a>
              <a href="" className="_1tin_td">
                Trang truyền thông hàng đầu xứ Trung gọi Chi Pu là 'Đệ nhất mỹ
                nhân Việt Nam', đăng ảnh gợi cảm với lời nhận xét bất ngờ
              </a>
            </div>
            <div className="docbao-1tin">
              <a href="">
                <img src="/static/images/docbao2.png" />
              </a>
              <a href="" className="_1tin_td">
                Trang truyền thông hàng đầu xứ Trung gọi Chi Pu là 'Đệ nhất mỹ
                nhân Việt Nam', đăng ảnh gợi cảm với lời nhận xét bất ngờ
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* END docbao.vn */}
      {/* Chữa bài vietnamnet.vn */}
      <Typography variant="h3" contact="h3">
        Chữa bài vietnamnet.vn
      </Typography>
      <section className="vietnamnet">
        <div className="vnn_khoitren">
          <a href="">
            <img src="/static/images/vnn_tren_1.jpeg" />
          </a>
          <a href="" className="vnntren_td">
            Kỷ lục mới 187 người mắc Covid-19 một ngày, chiều 16/5 thêm 54 ca
          </a>
          <p className="vnntren_nd">
            Tối 16/5, Việt Nam ghi nhận thêm 54 ca Covid-19 lây nhiễm trong
            nước, nâng tổng số ca mắc cả ngày lên 187 trường hợp.
          </p>
        </div>
        <div className="vnn_khoiduoi">
          <div className="duoi_1khoi">
            <a href="">
              <img src="/static/images/vnn_duoi_1.jpeg" />
            </a>
            <a href="" className="duoi_td">
              Hải Dương chi viện 267 cán bộ, sinh viên y chống dịch cùng Bắc
              Giang, Bắc .
            </a>
          </div>
          <div className="duoi_1khoi">
            <a href="">
              <img src="/static/images/vnn_duoi_1.jpeg" />
            </a>
            <a href="" className="duoi_td">
              Hải Dương chi viện 267 cán bộ, sinh viên y chống dịch cùng Bắc
              Giang, Bắc .
            </a>
          </div>
          <div className="duoi_1khoi">
            <a href="">
              <img src="/static/images/vnn_duoi_1.jpeg" />
            </a>
            <a href="" className="duoi_td">
              Hải Dương chi viện 267 cán bộ, sinh viên y chống dịch cùng Bắc
              Giang, Bắc .
            </a>
          </div>
          <div className="duoi_1khoi">
            <a href="">
              <img src="/static/images/vnn_duoi_1.jpeg" />
            </a>
            <a href="" className="duoi_td">
              Hải Dương chi viện 267 cán bộ, sinh viên y chống dịch cùng Bắc
              Giang, Bắc .
            </a>
          </div>
          <div className="duoi_1khoi">
            <a href="">
              <img src="/static/images/vnn_duoi_1.jpeg" />
            </a>
            <a href="" className="duoi_td">
              Hải Dương chi viện 267 cán bộ, sinh viên y chống dịch cùng Bắc
              Giang, Bắc .
            </a>
          </div>
          <div className="duoi_1khoi">
            <a href="">
              <img src="/static/images/vnn_duoi_1.jpeg" />
            </a>
            <a href="" className="duoi_td">
              Hải Dương chi viện 267 cán bộ, sinh viên y chống dịch cùng Bắc
              Giang, Bắc .
            </a>
          </div>
        </div>
      </section>

      {/*END vietnamnet.vn */}
    </div>
  );
};

export default TopPage;
