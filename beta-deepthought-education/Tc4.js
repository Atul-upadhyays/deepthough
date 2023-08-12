fixture `test case`
    .page `https://beta.deepthought.education/login`;

test('Tc4', async t => {  await t
            .maximizeWindow()
            .typeText("#username", "abc1234@gmail.com")
            .typeText("#password", "Abc@123")
            .click("button[type='submit']") 
            const dashboardTitle = await t.select(".dashboard-title").textContent;
            await t.expect(dashboardTitle).contains("Dashboard");
 });