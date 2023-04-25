import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Lottie from 'react-lottie';
import FaqAni from './data/faqs.json';

const lottieOptions = {
  animationData: FaqAni,   
  loop: true,        
  autoplay: true, 
};


const FaqContent = () => {
  return (
    <>
      <section className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      그린갤러리 골프멤버십은 어떤건가요? 
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      그린갤러리 골프멤버십은 골프와 예술이 만나 탄생한 새로운 문화의 골프멤버십입니다.<br/>
                      멤버십 하나로 전국 300개의 골프장과 미술품, 부가 혜택까지 즐기실 수 있습니다.  
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      그린갤러리 상품가입은 어떻게 하나요? 
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      가입신청서 작성 후 가입을 도와드리고 있습니다.<br/>
                      1588-1778로 문의주시면 가입에 대한 상담을 도와드리겠습니다. 
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      멤버십 사전 가입 시 혜택이 있나요?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      멤버십 가입 시 유명 브랜드커스터마이징 골프백 등 차별화된 사은품을 증정합니다. 
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      나의 등급 및 잔여 포인트는 어디서 확인 할 수 있나요? 
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      나의 등급 확인은 그린갤러리 홈페이지 로그인 후 마이페이지에서 확인하실 수 있습니다.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      미술품을 선택할 수 있나요? 
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      고객의 선호도와 취향에 맞는 미술품을 구성해드립니다.<br/>
                      원하시는 미술품을 선택하실 수 있습니다. 
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <Lottie
                  options={lottieOptions}
                  style={{width: '300px', height: '300px'}} // svg의 부모 div에 적용
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContent;
