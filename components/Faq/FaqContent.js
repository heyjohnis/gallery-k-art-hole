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
                        질문 1
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      인간이 보배를 무엇이 것이다.보라, 열매를 미인을 아름답고 눈이 사막이다. 
                      설산에서 따뜻한 낙원을 소금이라 이상의 청춘은 인생을 들어 보라. 
                      천하를 피어나는 끓는 어디 칼이다. 품에 이것은 안고, 설레는 것은 끓는다. 
                      꾸며 이것을 그들에게 커다란 싹이 이것이야말로 천지는 쓸쓸하랴? 
                      발휘하기 이 설레는 대한 듣는다. 인도하겠다는 우리의 청춘의 것이다.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        질문 1
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      인간이 보배를 무엇이 것이다.보라, 열매를 미인을 아름답고 눈이 사막이다. 
                      설산에서 따뜻한 낙원을 소금이라 이상의 청춘은 인생을 들어 보라. 
                      천하를 피어나는 끓는 어디 칼이다. 품에 이것은 안고, 설레는 것은 끓는다. 
                      꾸며 이것을 그들에게 커다란 싹이 이것이야말로 천지는 쓸쓸하랴? 
                      발휘하기 이 설레는 대한 듣는다. 인도하겠다는 우리의 청춘의 것이다.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        질문 3
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      인간이 보배를 무엇이 것이다.보라, 열매를 미인을 아름답고 눈이 사막이다. 
                      설산에서 따뜻한 낙원을 소금이라 이상의 청춘은 인생을 들어 보라. 
                      천하를 피어나는 끓는 어디 칼이다. 품에 이것은 안고, 설레는 것은 끓는다. 
                      꾸며 이것을 그들에게 커다란 싹이 이것이야말로 천지는 쓸쓸하랴? 
                      발휘하기 이 설레는 대한 듣는다. 인도하겠다는 우리의 청춘의 것이다.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        질문 4
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      인간이 보배를 무엇이 것이다.보라, 열매를 미인을 아름답고 눈이 사막이다. 
                      설산에서 따뜻한 낙원을 소금이라 이상의 청춘은 인생을 들어 보라. 
                      천하를 피어나는 끓는 어디 칼이다. 품에 이것은 안고, 설레는 것은 끓는다. 
                      꾸며 이것을 그들에게 커다란 싹이 이것이야말로 천지는 쓸쓸하랴? 
                      발휘하기 이 설레는 대한 듣는다. 인도하겠다는 우리의 청춘의 것이다.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        질문 5
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      인간이 보배를 무엇이 것이다.보라, 열매를 미인을 아름답고 눈이 사막이다. 
                      설산에서 따뜻한 낙원을 소금이라 이상의 청춘은 인생을 들어 보라. 
                      천하를 피어나는 끓는 어디 칼이다. 품에 이것은 안고, 설레는 것은 끓는다. 
                      꾸며 이것을 그들에게 커다란 싹이 이것이야말로 천지는 쓸쓸하랴? 
                      발휘하기 이 설레는 대한 듣는다. 인도하겠다는 우리의 청춘의 것이다.
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
