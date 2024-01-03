module.exports.execute = async (client, flag, arg, M) => {
  if (!arg)
    return void M.reply("🟥 *මොනවහරි කියන්න මට *lexfury* bla bla bla. වගේ*");

  const term = arg.trim();
  let responseDataData;

  try {
    const response = await axios.get(
      "https://vihangayt.me/tools/bard?q=" +
        term +
        "Finally, mention that this answer was generated for you by Lexfuri Ai."
    );

    const responseData = response.data;

    if (responseData.status) {
      responseDataData = responseData.data;
    } else {
      console.error("API Error:", responseData.error);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const image = await client.utils.getBuffer(
    "https://i.ibb.co/Cb7rrWG/code-crafters-removebg-preview.png"
  );
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;

  const utc = localTime + localOffset;
  const offset = 5.495; // UTC of srilanka is +05.30
  const srlk = utc + 3600000 * offset;

  const srilankaTimeNow = new Date(srlk).toLocaleString("si-LK");
  // Output: 2023-8-25, 12.40.35

  await client.sendMessage(M.from, { delete: M.key });

  let caption = `*හායි ${M.pushName}* කොහොමද ඉතිං. ඔයාට අපේ company website එක https://lexfury.github.io මෙතනින් බලාගන්න පුළුවන්. අපි එහෙනම් ඔයාගේ පිළිතුර දිහාවට හැරෙමු. \n\nToday :- *${srilankaTimeNow}*\n\n`;
  caption += `\n\n ${responseDataData}`;

  return void (await client.sendMessage(M.from, { image, caption }, { quoted: M }
  ));
};

module.exports.command = {
  name: "lexfury",
  category: "media",
  exp: 50,
  usage: "[text]",
  description: "Sends the answer to a given problem",
};
