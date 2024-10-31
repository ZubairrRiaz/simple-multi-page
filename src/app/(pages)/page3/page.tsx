import Pages from '@/app/components/Pages'
import Button from '@/app/components/Button'

const Page3 = () => {
  return (
    <div>
      <Pages name='Robert Frost' alt='Robert Frost' text={`“In three words I can sum up everything I've learned about life: it goes on.”`} src='data:image/jpeg;base64,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'/>
      <Button BackLink="/page2" NextLink="/page4"/>

    </div>
  )
}

export default Page3