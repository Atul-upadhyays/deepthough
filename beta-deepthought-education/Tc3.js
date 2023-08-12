fixture `test case`
    .page `https://beta.deepthought.education/login`;

test('tc3', async t => {
    await t
            .maximizeWindow()
            .typeText("#username", "c13@gmail.com")
            .typeText("#password", "Ac@1234")
            .click("button[type='submit']")  
            const errorText = await t.select("#login-error-notify").textContent;
            console.log(errorText)
            await t.expect(errorText).contains("Invalid login credentials");
});