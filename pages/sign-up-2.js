import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="회원가입 2"
        homePageUrl="/"
        homePageText="Home"
        activePageText="회원가입 2"
      />

      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">회원인증</h3>
                </div>

                <form method="post">
                  <div className="row">
                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>회원구분 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9 signup">
                        <div className="radio">
                          <label>
                            <input type="radio" value="option1" id="" checked={true} />
                            개인회원
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" value="option2" />
                              사업자 회원
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>사업자 부분 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9 signup">
                        <div className="radio">
                          <label>
                            <input type="radio" value="option1" id="" checked={true} />
                            개인사업자
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" value="option2" />
                            법인사업자
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>회원번호 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9">       
                      <label for="form1">법인명</label>   
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="form1"
                          placeholder="법인명"
                        />
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                      </div>
                      <div className="col-md-9 col-sm-9">       
                      <label for="form1">법인번호</label> 
                        <div className='d-flex'> 
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="form1"
                            placeholder="법인명"
                          />
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="form1"
                            placeholder="법인명"
                          />
                        </div> 
                      </div>
                    </div>



                    <div className="form-heading text-center">
                      <h3 className="form-title">기본정보</h3>
                    </div>


                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>아이디 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9 signup">
                        <input
                          className="form-control"
                          type="text"
                          name="id"
                          placeholder="아이디를 입력하세요"
                        />  
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>비밀번호 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9 signup">
                        <input
                          className="form-control"
                          type="text"
                          name="id"
                          placeholder="비밀번호를 입력하세요."
                        />  
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>비밀번호 확인 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9 signup">
                        <input
                          className="form-control"
                          type="text"
                          name="id"
                          placeholder="비밀번호를 한번 더 입력하세요."
                        />  
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>이름 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9 signup">
                        <input
                          className="form-control"
                          type="text"
                          name="id"
                          placeholder="이름을 입력하세요."
                        />  
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>주소</p>
                      </div>
                      <div className="col-md-9 col-sm-9"> 
                        <div className="row">   
                          <div className="col-md-8 col-sm-8">   
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              id="form1"
                              placeholder="우편번호"
                            />
                          </div> 
                          <div className="col-md-3 col-sm-3">   
                            <button>주소검색</button>
                          </div> 
                        </div>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="form1"
                          placeholder="기본주소"
                        />
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="form1"
                          placeholder="나머지 주소"
                        />
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>일반전화</p>
                      </div>
                      <div className="col-md-9 col-sm-9"> 
                        <div className="row">   
                          <div className="col-md-3 col-sm-3">   
                            <select name="choice">
                              <option value="banana">010</option>
                              <option value="apple">017</option>
                              <option value="orange">00</option>
                            </select>
                          </div> 
                          <div className="col-md-3 col-sm-3">   
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              id="form1"
                              placeholder="1231"
                            />
                          </div> 
                          <div className="col-md-3 col-sm-3">   
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              id="form1"
                              placeholder="1234"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>휴대전화 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9"> 
                        <div className="row">   
                          <div className="col-md-3 col-sm-3">   
                            <select name="choice">
                              <option value="banana">010</option>
                              <option value="apple">017</option>
                              <option value="orange">00</option>
                            </select>
                          </div> 
                          <div className="col-md-3 col-sm-3">   
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              id="form1"
                              placeholder="1231"
                            />
                          </div> 
                          <div className="col-md-3 col-sm-3">   
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              id="form1"
                              placeholder="1234"
                            />
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>이메일 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9 signup">
                        <input
                          className="form-control"
                          type="text"
                          name="id"
                          placeholder="이름을 입력하세요."
                        />  
                      </div>
                    </div>

                    <div className="form-group signup">
                      <div className="col-md-3 col-sm-3">
                        <p>딜러코드 <span className='sup'>*</span></p>
                      </div>
                      <div className="col-md-9 col-sm-9 signup">
                        <input
                          className="form-control"
                          type="text"
                          name="id"
                          placeholder="이름을 입력하세요."
                        />  
                      </div>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
          <Link className="default-btn" href="/sign-up-3">
            회원가입
          </Link>
        </div>

      </div>

      <Footer />
    </>
  );
}
