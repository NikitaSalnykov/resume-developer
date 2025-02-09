import { Container, Section, Title } from 'components/Resume.styled'
import { CutText } from 'helpers/CutText';
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
         <Title>{t('about-me')}</Title>
        <CutText text={t('bio')} symbols={400}/>
      </Container>
    </Section>
  )
}
