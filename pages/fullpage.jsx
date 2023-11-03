import { SectionsContainer, Section } from "react-fullpage";

let options = {
  anchors: ["sectionOne", "sectionTwo", "sectionThree"],
};

export default function Index({ user }) {
  return (
    <SectionsContainer {...options}>
      <Section>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
      </Section>
      <Section>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
      </Section>
      <Section>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
      </Section>
    </SectionsContainer>
  );
}
