fixture `test case`
    .page `https://beta.deepthought.education/login`;

test('Tc2', async t => {
     await t
            .maximizeWindow()
            .typeText("#username", "c13@gmail.com")
            .typeText("#password", "Ac@1234")
            .click("button[type='submit']")  
});