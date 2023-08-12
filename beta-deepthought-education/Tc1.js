import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://beta.deepthought.education/login`;
    
test(`New Test`, async t => {
    await t
            .maximizeWindow()
            .typeText("#username", "abc1234@gmail.com")
            .typeText("#password", "Abc@123")
            .click("button[type='submit']")  
});
