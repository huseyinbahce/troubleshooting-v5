const uiText = {
  en: {
    pageTitle: 'Ayık Band | Conveyor Belt Troubleshooting Guide',
    pageHeading: 'Conveyor Belt Troubleshooting Guide',
    sectionTitle: 'Symptom → causes → fixes',
    sectionSubtitle: 'Pick a conveyor symptom to explore likely causes and actions.',
    aboutLabel: 'About this guide:',
    aboutBody: 'Troubleshooting conveyors takes experience. When equipment is correctly selected, installed, and maintained, most issues can be avoided—but problems often repeat when symptoms are treated instead of root causes. Wear, material changes, and complex system dynamics may still require expert input. This guide helps you connect visible symptoms to likely causes and practical on-site actions.',
    aboutAria: 'About this guide',
    legendProblem: 'Problem',
    legendCause: 'Cause',
    legendSolution: 'Solution',
    problemColumnTitle: 'Pick your problem',
    problemColumnHint: 'Scroll the list to browse issues.',
    causeColumnTitle: 'Possible causes',
    solutionColumnTitle: 'Solutions',
    selectedPrompt: 'Select a problem to start',
    solutionPlaceholder: 'Choose a cause to see recommended actions.',
    disclaimerTitle: 'Disclaimer',
    disclaimerBody:
      'This guide is for informational purposes only and is not a substitute for engineering or operating instructions. Applications and interventions must be planned and executed by authorized personnel in line with onsite risk assessments, manufacturer guidance, and applicable safety regulations. Ayık Band accepts no responsibility for direct or indirect outcomes from using this guide.',
    photoPlaceholder: 'Add image',
    photoAltPrefix: 'Photo for',
    causeTitlePrefix: 'Cause',
    returnAria: 'Return to Ayık Band homepage',
    logoAria: 'Ayık Band homepage',
    headerImageAlt: 'Reliability illustration',
  },
  tr: {
    pageTitle: 'Ayık Band | Konveyör Bant Çözüm Rehberi',
    pageHeading: 'Konveyör Bant Çözüm Rehberi',
    sectionTitle: 'Problem → Kök Neden → Çözüm',
    sectionSubtitle: 'Konveyörünüzde yaşadığınız problemlerin olası kök nedenlerine ve uygulanabilir çözüm adımlarına ulaşın.',
    aboutLabel: 'Bu rehber hakkında:',
    aboutBody:
      'Doğru montaj ve bakım, sistem performansının temelidir. Rehberimiz, sık karşılaşılan sorunları kök neden analiziyle eşleştirerek potansiyel çözümler sunmayı amaçlar.',
    aboutAria: 'About this guide',
    legendProblem: 'Problem',
    legendCause: 'Kök Neden',
    legendSolution: 'Çözüm',
    problemColumnTitle: 'Problemler',
    problemColumnHint: 'Lütfen yaşadığınız problemi aşağıdaki listeden seçiniz.',
    causeColumnTitle: 'Olası Kök Nedenler',
    solutionColumnTitle: 'Çözüm',
    selectedPrompt: 'Lütfen başlamak için bir problem seçiniz.',
    solutionPlaceholder: 'Çözüm önerisini görmek için bir kök neden seçiniz.',
    disclaimerTitle: 'Bilgilendirme',
    disclaimerBody:
      'Bu rehber yalnızca bilgilendirme amaçlıdır ve mühendislik/işletme talimatı yerine geçmez. Uygulamalar ve müdahaleler, sahadaki risk değerlendirmesi, üretici talimatları ve yürürlükteki İSG mevzuatına uygun şekilde, yetkili personel tarafından planlanmalı ve yürütülmelidir. Ayık Band, bu rehberin kullanımından doğabilecek doğrudan veya dolaylı sonuçlardan sorumluluk kabul etmez.',
    photoPlaceholder: 'Görsel ekleyin',
    photoAltPrefix: 'Fotoğraf -',
    causeTitlePrefix: 'Neden',
    returnAria: 'Ayık Band',
    logoAria: 'Ayık Band',
    headerImageAlt: 'Reliability illustration',
  },
};

const causeCatalog = {
  1: {
    title: { en: 'Belt bowed.', tr: 'Konveyör bant kavisli bir form almış olabilir.' },
    solution: {
      en: 'Avoid telescoping belt rolls or storing them in damp locations. A new belt should straighten out when broken in, otherwise replace it.',
      tr: 'Konveyör bandı nemli ortamda depolamayın ve rulodayken yanlara kayıp “teleskop” şekli almasına izin vermeyin. Yeni konveyör bantlar devreye alındıktan kısa süre sonra düz hale gelir; gelmiyorsa bant değiştirilmelidir.',
    },
  },
  2: {
    title: { en: 'Belt improperly spliced or wrong fasteners', tr: 'Konveyör bant eki hatalı yapılmış veya yanlış mekanik ek kullanılmış olabilir.' },
    solution: {
      en: 'Use correct fasteners and re-tighten after a short run. If the splice is wrong, remove and redo it, then set up a regular inspection schedule.',
      tr: 'Konveyör bandınıza uygun mekanik ek kullanınız ve bandı kısa süre çalıştırdıktan sonra bağlantıların sıkılığını kontrol ediniz. Ek hatalı yapıldıysa çıkarıp yeni ek yapınız, ardından düzenli kontrol için periyodik denetim planı oluşturunuz.',
    },
  },
  3: {
    title: { en: 'Belt speed too fast', tr: 'Bant hızı yüksek olabilir.' },
    solution: { en: 'Reduce belt speed.', tr: 'Bant hızını düşürünüz.' },
  },
  4: {
    title: { en: 'Belt strained on one side', tr: 'Konveyör bandın bir tarafı fazla gergin olabilir.' },
    solution: {
      en: 'Allow time for a new belt to break in. If strain remains or the belt is not new, remove the strained section and splice in a new piece.',
      tr: 'Konveyör bant yeniyse belli bir süre çalışıp oturmasını bekleyiniz. Bu durum devam ediyorsa (veya bant yeni değilse), fazla gergin kısmı kesip çıkarın ve yerine yeni bir parça ekleyin.',
    },
  },
  5: {
    title: { en: 'Breaker strip missing or inadequate', tr: 'Konveyör bantta breaker katı bulunmuyor veya yetersiz olabilir.' },
    solution: {
      en: 'When service is lost, install a belt with the proper breaker strip.',
      tr: 'En yakın fırsatta uygulamanıza uygun breaker katı olan bir konveyör bant tercih ediniz.',
    },
  },
  6: {
    title: { en: 'Counterweight too heavy', tr: 'Gerdirme ağırlığı gereğinden fazla ağır olabilir.' },
    solution: {
      en: 'Recalculate required weight and adjust the counterweight. Reduce takeup tension until just before slip, then tighten slightly.',
      tr: 'Gerekli ağırlığı yeniden hesaplayınız ve sistemi buna göre ayarlayınız.',
    },
  },
  7: {
    title: { en: 'Counterweight too light', tr: 'Gerdirme ağırlığı gereğinden hafif olabilir.' },
    solution: {
      en: 'Recalculate required weight and adjust counterweight or screw takeup as needed.',
      tr: 'Gerekli ağırlığı yeniden hesaplayınız ve sistemi buna göre ayarlayınız.',
    },
  },
  8: {
    title: { en: 'Damage by abrasives, acid, chemicals, heat, mildew, oil', tr: 'Aşındırıcı malzeme, kimyasal, ısı veya yağ teması konveyör banda hasar veriyor olabilir.' },
    solution: {
      en: 'Use a belt designed for the specific condition. Patch cuts, seal metal fasteners, consider vulcanized splices, and protect the belt from weather. Avoid over-lubrication.',
      tr: 'Çalışma koşullarınıza uygun konveyör bant seçiniz. Konveyör bant üzerinde mekanik ek varsa metal kısımları sızdırmaz kaplamayla koruyunuz; mümkünse vulkanize ek tercih ediniz. Bandı güneş, yağmur gibi dış etkenlerden koruyunuz ve ekipmanları aşırı yağlamaktan kaçınınız.',
    },
  },
  9: {
    title: { en: 'Differential speed wrong on dual pulleys', tr: 'İkili tahrik mevcutsa tamburların hız uyumu yanlış olabilir.' },
    solution: { en: 'Make the necessary adjustment.', tr: 'Tamburların eşit hızla döndüğünden emin olunuz.' },
  },
  10: {
    title: { en: 'Drive under-belted', tr: 'Tahrik sistemine göre yetersiz mukavemette konveyör bant seçilmiş olabilir.' },
    solution: {
      en: 'Recalculate maximum belt tensions and choose the correct belt. For over-extended lines, consider two-flight systems. Install a belt with proper flexibility if the carcass is too rigid.',
      tr: 'Maksimum konveyör bant gerilimlerini yeniden hesaplayınız ve buna uygun mukavemette bir konveyör bant seçiniz. Hat çok uzunsa kapasiteyi iki konveyöre bölmeyi değerlendiriniz. Konveyör bant karkası enine yeterince esnek değilse daha uygun bir konveyör bant tercih ediniz.',
    },
  },
  11: {
    title: { en: 'Edge worn or broken', tr: 'Konveyör bantta kenar hasarı meydana gelmiş olabilir.' },
    solution: {
      en: 'Repair the belt edge, or remove the worn section and splice in a new piece.',
      tr: 'Oluşan kenar hasarını onarınız; gerekiyorsa zarar gören bant bölümünü kesip çıkarınız ve yerine yeni bir parça ek yapınız.',
    },
  },
  12: {
    title: { en: 'Excessive impact of material on belt or fasteners', tr: 'Malzeme konveyör banda aşırı darbe uyguluyor olabilir.' },
    solution: {
      en: 'Use correctly designed chutes and baffles, make vulcanized splices, install impact idlers, load fines first when possible, and adjust skirts or install cushioning idlers.',
      tr: 'Besleme şutunu konveyör bant üzerine uygulanan darbeyi azaltacak şekilde yeniden düzenleyiniz. Mümkünse mekanik ek yerine vulkanize ek tercih ediniz. Besleme bölgesinde darbe ruloları kullanınız. Mümkünse konveyör bandı önce ince malzemeyle besleyiniz. Şut eteklerinin doğru yerleştirildiğinden ve işlevlerini yerine getiriyor olduklarından emin olunuz.',
    },
  },
  13: {
    title: { en: 'Excessive tension', tr: 'Konveyör bant gereğinden fazla gergin olabilir.' },
    solution: {
      en: 'Recalculate and adjust tension. Use vulcanized splices within recommended limits.',
      tr: 'Gereken konveyör bant gerilimini yeniden hesaplayınız ve sistemi buna göre ayarlayınız. Önerilen limitler içerisinde vulkanize ek kullanmaya öncelik veriniz.',
    },
  },
  14: {
    title: { en: 'Frozen idlers', tr: 'Dönmeyen rulolar mevcut olabilir.' },
    solution: {
      en: 'Free and lubricate idlers, and improve maintenance while avoiding over-lubrication.',
      tr: 'Sıkışan ruloları yağlayınız. Aşırı yağlamadan kaçınınız ve rulo bakım düzenini iyileştiriniz.',
    },
  },
  15: {
    title: { en: 'Idlers or pulleys out-of-square with center line of conveyor', tr: 'Rulolar veya tamburlar konveyörün merkez hattına göre gönye dışı kalmış olabilir.' },
    solution: {
      en: 'Realign components and consider limit switches for safety.',
      tr: 'Rulo ve tamburları, dönme eksenleri konveyör bant merkez çizgisine dik olacak şekilde hizalayınız.',
    },
  },
  16: {
    title: { en: 'Idlers improperly placed', tr: 'Rulolar yanlış konumlandırılmış olabilir.' },
    solution: {
      en: 'Relocate idlers or add additional ones to support the belt.',
      tr: 'Ruloları doğru konumlandırınız. Konveyör bandı yeterlice desteklemek için gerekirse ilave rulo istasyonları ekleyiniz.',
    },
  },
  17: {
    title: { en: 'Improper loading or spillage', tr: 'Malzeme hatalı şekilde besleniyor olabilir.' },
    solution: {
      en: 'Load in the direction of belt travel at belt speed, centered on the belt. Control flow with feeders, chutes, and skirtboards.',
      tr: 'Malzemeyi konveyör bandın gidiş yönünde, mümkün olduğunca bant hızına yakın bir hızda ve bant merkezine gelecek şekilde besleyiniz.',
    },
  },
  18: {
    title: { en: 'Improper storage or handling', tr: 'Konveyör bant yanlış şekilde taşınmış veya depolanmış olabilir.' },
    solution: {
      en: 'Follow manufacturer guidance for storage and handling.',
      tr: 'Konveyör bant taşıma ve depolama işlemlerini bant üreticisinin önerdiği şekilde yapınız.',
    },
  },
  19: {
    title: { en: 'Insufficient traction between belt and pulley', tr: 'Konveyör bant ile tahrik tamburu arasındaki tutunma yetersiz olabilir.' },
    solution: {
      en: 'Increase wrap with snub pulleys, lag the drive pulley (use grooved lagging when wet), and install proper cleaning devices. See also counterweight settings.',
      tr: 'Saptırma tamburu pozisyonunu ayarlayarak sarım açısını artırınız. Tahrik tamburunu kaplayınız. Uygun konveyör bant sıyırıcıları kullanınız. Konveyör gergi ayarlarını kontrol edin.',
    },
  },
  20: {
    title: { en: 'Material between belt and pulley', tr: 'Konveyör bant ve tambur arasına malzeme giriyor olabilir.' },
    solution: {
      en: 'Use skirtboards properly, remove buildup, and improve maintenance.',
      tr: 'Şut eteklerinin doğru şekilde yerleştirildiğinden ve işlevlerini yerine getiriyor olduklarından emin olunuz. Biriken malzemeyi temizleyiniz. Konveyör bakım koşullarınızı iyileştiriniz.',
    },
  },
  21: {
    title: { en: 'Material build-up', tr: 'Malzeme birikiyor olabilir.' },
    solution: {
      en: 'Remove accumulation. Install cleaning devices, scrapers, and inverted “V” decking. Improve housekeeping.',
      tr: 'Biriken malzemeyi ortadan kaldırınız. Geri dönüş tarafında malzeme birikmesini azaltmak için konveyör bant sıyırıcıları kullanınız. Saha temizlik düzeninizi iyileştiriniz.',
    },
  },
  22: {
    title: { en: 'Pulley lagging worn', tr: 'Tambur kaplamaları aşınmış olabilir.' },
    solution: {
      en: 'Replace worn lagging, use grooved lagging for wet conditions, and tighten loose or protruding bolts.',
      tr: 'Aşınmış tambur kaplamalarını yenileyiniz. Eğer konveyör bant ıslak koşullarda çalışıyorsa yivli tambur kaplaması tercih ediniz.',
    },
  },
  23: {
    title: { en: 'Pulleys too small', tr: 'Tambur çapları olması gerekenden küçük olabilir.' },
    solution: {
      en: 'Use larger diameter pulleys.',
      tr: 'Daha büyük çaplı tamburlar kullanınız.',
    },
  },
  24: {
    title: { en: 'Radius of convex vertical curve too small', tr: 'Dikey geçiş yarıçapı çok küçük; hat kısa mesafede gereğinden fazla açı değiştiriyor olabilir.' },
    solution: {
      en: 'Increase the radius through vertical realignment of idlers to limit edge tension.',
      tr: 'Konveyör bant kenar gerilimini azaltmak için ruloların düşey hizasını yeniden düzenleyerek geçiş yarıçapını büyütünüz.',
    },
  },
  25: {
    title: { en: 'Relative loading velocity too high or too low', tr: 'Bağıl besleme hızı gereğinden yüksek veya düşük olabilir.' },
    solution: {
      en: 'Adjust chutes or correct belt speed; consider impact idlers.',
      tr: 'Malzemeyi konveyör bandın gidiş yönünde, mümkün olduğunca bant hızına yakın bir hızda ve bant merkezine gelecek şekilde besleyiniz. Besleme bölgesinde darbe ruloları kullanmayı değerlendiriniz.',
    },
  },
  26: {
    title: { en: 'Side loading', tr: 'Malzeme konveyör bant merkezine beslenmiyor olabilir.' },
    solution: {
      en: 'Load in the direction of belt travel and centered on the conveyor.',
      tr: 'Malzemeyi konveyör bandın merkezine gelecek şekilde besleyiniz.',
    },
  },
  27: {
    title: { en: 'Skirts improperly placed or not maintained', tr: 'Etek lastikleri yanlış konumlandırılmış veya uzun süre bakımları yapılmamış olabilir.' },
    solution: {
      en: 'Install skirtboards that do not rub the belt and maintain them regularly.',
      tr: 'Bandı aşındırmayacak tipte etek lastikleri kullanınız ve belli aralıklarla bakımlarını gerçekleştiriniz.',
    },
  },
  28: {
    title: { en: 'Wear liners missing, worn or improperly installed', tr: 'Aşınma plakaları kullanılmıyor olabilir. Kullanılıyorsa yıpranmış veya hatalı monte edilmiş olabilir.' },
    solution: {
      en: 'Replace wear liners with properly aligned, gradually relieving edges in the direction of travel.',
      tr: 'Aşınma plakalarını, konveyör bandın gidiş yönünde kenarları kademeli geçiş yapacak ve doğru hizalanacak şekilde yerleştiriniz.',
    },
  },
  29: {
    title: { en: 'Belt overloaded', tr: 'Konveyör bant kapasitesinin üzerinde besleniyor olabilir.' },
    solution: {
      en: 'Operate the feed system at design capacity or below.',
      tr: 'Beslemeyi tasarım kapasitesinde veya altında gerçekleştiriniz.',
    },
  },
  30: {
    title: { en: 'Excessive belt sag', tr: 'Konveyör bant normalden fazla aşağı sarkıyor olabilir.' },
    solution: {
      en: 'Recalculate take up tension and add belt support systems or reduce idler spacing.',
      tr: 'Gereken konveyör bant gerilimini yeniden hesaplayınız ve ağırlık sistemini buna göre ayarlayınız. Sarkmayı azaltmak için ilave bant destek elemanları kullanınız veya rulo istasyonu aralıklarını düşürünüz.',
    },
  },
  31: {
    title: { en: 'Belt rolls back after shutdown', tr: 'Konveyör durduktan sonra bant geri kaçıyor olabilir.' },
    solution: {
      en: 'Install or repair a belt holdback or brake.',
      tr: 'Geri kaçırmayı önleyen tutucu (holdback) veya fren sistemi kullanınız; eğer bu sistemlerden biri mevcutsa bakımlarını gerçekleştiriniz.',
    },
  },
  32: {
    title: { en: 'Insufficient number of belt cleaners or lack of maintenance', tr: 'Sıyırıcı sayısı yetersiz veya mevcut sıyırıcıların bakımı aksıyor olabilir.' },
    solution: {
      en: 'Install more belt cleaners or increase maintenance frequency.',
      tr: 'İlave sıyırıcılar yerleştiriniz. Sıyırıcı bakım sıklığını artırınız.',
    },
  },
  33: {
    title: { en: 'Bulk material properties have changed', tr: 'Yığın malzeme özellikleri değişmiş olabilir.' },
    solution: {
      en: 'If change is permanent, redesign chutes and cleaners, and re-evaluate conveyor speed, tension, and belt type.',
      tr: 'Malzeme özellikleri kalıcı olarak değiştiyse şutları ve sıyırıcıları yeni koşullara göre yeniden düzenleyiniz. Konveyör hızını, bant gergisini ve kullanılan bant tipini yeniden değerlendiriniz.',
    },
  },
  34: {
    title: { en: 'Emergency repairs or actions', tr: 'Acil durumlar sebebiyle geçici çözümler uygulanmış olabilir.' },
    solution: {
      en: 'Replace temporary fixes with proper repairs and automate accessories where possible. Avoid heating or hammering components.',
      tr: 'Problemin ortadan kalkması için kök nedeni ortadan kaldıracak kalıcı çözümlere başvurunuz. Konveyör elemanlarına ısı vererek ya da çekiçle vurarak müdahale etmeyiniz.',
    },
  },
  35: {
    title: { en: 'Monitoring devices inoperable', tr: 'İzleme cihazları çalışmıyor veya işlevlerini yerine getirmiyor olabilir.' },
    solution: {
      en: 'Repair or activate monitoring devices.',
      tr: 'İzleme cihazlarını aktif hale getiriniz; gerekiyorsa onarınız.',
    },
  },
};

const problems = [
  { title: { en: 'Belt runs off at tail pulley', tr: 'Konveyör bant kuyruk tamburunda merkezden kayıyor.' }, codes: [7, 15, 14, 17, 21, 34], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/tail-1-1.png' },
  { title: { en: 'Entire belt runs off at all points of the line', tr: 'Konveyör bant, hattın tamamı boyunca merkezden kayıyor.' }, codes: [26, 17, 15, 21, 4, 16], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/image-removebg-preview-5.png' },
  { title: { en: 'One belt section runs off at all points on the line', tr: 'Konveyör bandın belli bir bölümü konveyörün her noktasında merkezden kayıyor.' }, codes: [2, 11, 1, 34], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/image-removebg-preview-2.png' },
  { title: { en: 'Belt runs off at head pulley', tr: 'Konveyör bant kafa tamburunda merkezden kayıyor.' }, codes: [15, 22, 21, 16, 34], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/tail-1-1-1.webp' },
  { title: { en: 'Belt runs to one side throughout entire length at specific idlers', tr: 'Konveyör bant, hat üstündeki belirli rulolarda merkezden kayıyor.' }, codes: [15, 16, 21, 34], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/rulo324.png' },
  { title: { en: 'Belt slip', tr: 'Konveyör bant patinaj yapıyor.' }, codes: [19, 7, 21, 14, 22], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/dffd.png' },
  { title: { en: 'Belt slip on starting', tr: 'Konveyör bant ilk çalıştığında patinaj yapıyor.' }, codes: [19, 7, 22, 10], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/slip.png' },
  { title: { en: 'Excessive belt stretch', tr: 'Konveyör bant normalden fazla uzuyor.' }, codes: [13, 10, 21, 6, 9], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/image-removebg-preview-3.png' },
  { title: { en: 'Belt breaks at or behind fasteners or fasteners tear loose', tr: 'Konveyör bant, mekanik ek bulunan bölgede yırtılıyor ya da kopuyor; mekanik ek yerinden sökülüp çıkıyor.' }, codes: [2, 23, 13, 22, 20, 10], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/sdfsdf.png' },
  { title: { en: 'Vulcanized splice separation', tr: 'Vulkanize ek yerinde ayrılma meydana geliyor.' }, codes: [13, 23, 10, 20, 2, 9], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/image-removebg-preview-4.png' },
  { title: { en: 'Excessive belt wear including rips, gouges, ruptures and tears', tr: 'Konveyör bantta normalden fazla yırtık, yarık, kesik vb. hasarlar oluşuyor.' }, codes: [12, 25, 17, 21, 8, 5], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/unnamed-1-1.jpg' },
  { title: { en: 'Excessive belt bottom cover wear', tr: 'Konveyör bant alt kaplaması normalden fazla aşınıyor.' }, codes: [21, 14, 5, 19, 20, 22], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/bottom.jpg' },
  { title: { en: 'Excessive belt edge wear, broken edges', tr: 'Konveyör bant kenarları normalden fazla aşınıyor.' }, codes: [26, 4, 17, 8, 1, 21], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/unnamed-5.jpg' },
  { title: { en: 'Belt cover swells in spots or streaks', tr: 'Konveyör bant kaplamasında nokta nokta veya çizgi halinde şişmeler oluşuyor.' }, codes: [8], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/unnamed-4.jpg' },
  { title: { en: 'Belt hardens or cracks', tr: 'Konveyör bant sertleşiyor veya çatlıyor.' }, codes: [8, 23, 22, 18], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/dfsdf.png' },
  { title: { en: 'Belt covers become checked or brittle', tr: 'Konveyör bant kaplamasında gevrekleşme ve kılcal çatlaklar meydana geliyor.' }, codes: [8, 18], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/abdhs.png' },
  { title: { en: 'Longitudinal grooving or cracking of belt top cover', tr: 'Konveyör bant üst kaplamasında boyuna oyuklar veya çatlaklar meydana geliyor.' }, codes: [27, 14, 21, 12], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/unnamed-3.jpg' },
  { title: { en: 'Longitudinal grooving or cracking of belt bottom cover', tr: 'Konveyör bant alt kaplamasında boyuna oyuklar veya çatlaklar meydana geliyor.' }, codes: [14, 21, 22], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/lndsdfg.jpg' },
  { title: { en: 'Belt fabric decay, carcass cracks, ruptures, gouges (soft spots in belt)', tr: 'Konveyör bant karkasında bozunma, çatlama, yırtılma/kopma gibi hasarlar oluşuyor.' }, codes: [12, 20, 5, 10, 8, 24], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/csfd.png' },
  { title: { en: 'Belt ply separation', tr: 'Bant katmanlarında ayrılma meydana geliyor.' }, codes: [13, 23, 11, 8, 3], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/sd232-scaled.png' },
  { title: { en: 'Build up on bend pulleys and return idlers', tr: 'Saptırma tamburlarında ve dönüş rulolarında malzeme birikiyor.' }, codes: [32, 33, 8, 22], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/tambur34.png' },
  { title: { en: 'Spillage of fines and small particles in loading area', tr: 'Besleme bölgesinde ince malzeme dökülüyor.' }, codes: [27, 28, 17, 12, 30], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/unnamed-6.jpg' },
  { title: { en: 'Spillage of larger particles and lumps along conveyor', tr: 'Konveyör boyunca iri malzeme parçaları dökülüyor.' }, codes: [15, 29, 30, 31, 35], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/image-removebg-preview-6.png' },
  { title: { en: 'Plugged chutes', tr: 'Şutlarda tıkanma gerçekleşiyor.' }, codes: [35, 33, 34, 31], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/dsasads.jpg' },
  { title: { en: 'Damage to accessories in contact with the belt', tr: 'Konveyör bant ile temas sağlayan diğer konveyör bileşenleri hasar görüyor.' }, codes: [31, 2, 11], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/unnamed-2.jpg' },
];

const problemGrid = document.getElementById('problem-grid');
const selectedProblemNode = document.getElementById('selected-problem');
const causeClouds = document.getElementById('cause-clouds');
const solutionPanel = document.getElementById('solution-panel');

let currentLang = 'tr';
let selectedProblemIndex = null;
let selectedCauseCode = null;

function t(key) {
  return uiText[currentLang][key] || '';
}

function updateStaticText() {
  document.title = t('pageTitle');

  const pageHeading = document.getElementById('page-heading');
  if (pageHeading) pageHeading.textContent = t('pageHeading');

  const sectionTitle = document.getElementById('section-title');
  if (sectionTitle) sectionTitle.textContent = t('sectionTitle');

  const sectionSubtitle = document.getElementById('section-subtitle');
  if (sectionSubtitle) sectionSubtitle.textContent = t('sectionSubtitle');

  const aboutLabel = document.getElementById('about-label');
  if (aboutLabel) aboutLabel.textContent = t('aboutLabel');

  const aboutBody = document.getElementById('about-body');
  if (aboutBody) aboutBody.textContent = t('aboutBody');

  const aboutGuide = document.querySelector('.about-guide');
  if (aboutGuide) aboutGuide.setAttribute('aria-label', t('aboutAria'));

  const legendProblem = document.getElementById('legend-problem');
  if (legendProblem) legendProblem.textContent = t('legendProblem');

  const legendCause = document.getElementById('legend-cause');
  if (legendCause) legendCause.textContent = t('legendCause');

  const legendSolution = document.getElementById('legend-solution');
  if (legendSolution) legendSolution.textContent = t('legendSolution');

  const problemColumnTitle = document.getElementById('problem-column-title');
  if (problemColumnTitle) problemColumnTitle.textContent = t('problemColumnTitle');

  const problemColumnHint = document.getElementById('problem-column-hint');
  if (problemColumnHint) problemColumnHint.textContent = t('problemColumnHint');

  const causeColumnTitle = document.getElementById('cause-column-title');
  if (causeColumnTitle) causeColumnTitle.textContent = t('causeColumnTitle');

  const solutionColumnTitle = document.getElementById('solution-column-title');
  if (solutionColumnTitle) solutionColumnTitle.textContent = t('solutionColumnTitle');

  const returnLink = document.getElementById('return-link');
  if (returnLink) returnLink.setAttribute('aria-label', t('returnAria'));

  const logoLink = document.querySelector('.logo-link');
  if (logoLink) logoLink.setAttribute('aria-label', t('logoAria'));

  const headerVisualImg = document.getElementById('header-visual-img');
  if (headerVisualImg) headerVisualImg.setAttribute('alt', t('headerImageAlt'));

  const disclaimerTitle = document.getElementById('disclaimer-title');
  if (disclaimerTitle) disclaimerTitle.textContent = t('disclaimerTitle');

  const disclaimerBody = document.getElementById('disclaimer-body');
  if (disclaimerBody) disclaimerBody.textContent = t('disclaimerBody');
}

function renderProblems() {
  if (!problemGrid) return;
  problemGrid.innerHTML = '';
  problems.forEach((problem, index) => {
    const button = document.createElement('button');
    button.className = 'problem-chip';
    button.type = 'button';
    const hasImage = Boolean(problem.image);
    const photoContent = hasImage
      ? `<img src="${problem.image}" alt="${t('photoAltPrefix')} ${problem.title[currentLang]}" class="problem-img" loading="lazy">`
      : `<span class="photo-placeholder">${t('photoPlaceholder')}</span>`;

    button.innerHTML = `
      <div class="problem-photo ${hasImage ? 'has-image' : ''}" aria-hidden="true">
        ${photoContent}
      </div>
      <div class="problem-title">${problem.title[currentLang]}</div>
    `;
    button.setAttribute('aria-label', problem.title[currentLang]);
    button.addEventListener('click', () => selectProblem(index));
    if (selectedProblemIndex === index) {
      button.classList.add('active');
    }
    problemGrid.appendChild(button);
  });
}

function selectProblem(index, options = {}) {
  const { preserveCause = false } = options;
  selectedProblemIndex = index;
  if (!preserveCause) {
    selectedCauseCode = null;
  }

  const allChips = problemGrid.querySelectorAll('.problem-chip');
  allChips.forEach((chip, chipIndex) => {
    chip.classList.toggle('active', chipIndex === index);
  });

  const problem = problems[index];
  selectedProblemNode.textContent = problem.title[currentLang];

  renderCauses(problem.codes);

  if (preserveCause && selectedCauseCode) {
    const match = causeClouds.querySelector(`[data-code="${selectedCauseCode}"]`);
    if (match) {
      selectCause(selectedCauseCode, match, { preserve: true });
      return;
    }
  }

  resetSolution();
}

function renderCauses(codes) {
  causeClouds.innerHTML = '';
  codes.forEach((code, index) => {
    const cause = causeCatalog[code];
    const cloud = document.createElement('button');
    cloud.type = 'button';
    cloud.className = 'cause-cloud';
    cloud.dataset.rank = index + 1;
    cloud.dataset.code = code;
    cloud.style.setProperty('--order', index);
    cloud.innerHTML = `
      <span class="cause-rank-chip" aria-hidden="true">${index + 1}</span>
      <div class="cause-text">
        <span class="cause-title">${cause.title[currentLang]}</span>
      </div>
    `;
    if (selectedCauseCode === code) {
      cloud.classList.add('active');
    }
    cloud.addEventListener('click', () => selectCause(code, cloud));
    causeClouds.appendChild(cloud);
  });
}

function selectCause(code, cloud, options = {}) {
  const { preserve = false } = options;
  selectedCauseCode = code;

  causeClouds.querySelectorAll('.cause-cloud').forEach((node) => node.classList.remove('active'));
  cloud.classList.add('active');

  const cause = causeCatalog[code];
  solutionPanel.innerHTML = '';
  solutionPanel.classList.remove('active-card');

  const title = document.createElement('h5');
  title.textContent = `${t('causeTitlePrefix')} #${cloud.dataset.rank} · ${cause.title[currentLang]}`;

  const body = document.createElement('p');
  body.className = 'solution-body';
  body.textContent = cause.solution[currentLang];

  solutionPanel.appendChild(title);
  solutionPanel.appendChild(body);

  if (!preserve) {
    void solutionPanel.offsetWidth;
    solutionPanel.classList.add('active-card');
  } else {
    solutionPanel.classList.add('active-card');
  }
}

function resetSolution() {
  selectedCauseCode = null;
  solutionPanel.classList.remove('active-card');
  solutionPanel.innerHTML = `<p class="placeholder">${t('solutionPlaceholder')}</p>`;
}

function bindProblemListNavigation() {
  problemGrid?.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;

    const chips = [...problemGrid.querySelectorAll('.problem-chip')];
    if (!chips.length) return;

    const focusIndex = chips.indexOf(document.activeElement);
    const delta = event.key === 'ArrowDown' ? 1 : -1;
    const nextIndex = focusIndex === -1 ? 0 : Math.min(chips.length - 1, Math.max(0, focusIndex + delta));

    event.preventDefault();
    const nextChip = chips[nextIndex];
    nextChip.focus({ preventScroll: true });
    nextChip.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === currentLang ? 'true' : 'false');
  });
}

function bindLanguageToggle() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!lang || lang === currentLang) return;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  if (!uiText[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  updateLangButtons();
  applyLanguage();
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  updateLangButtons();
  updateStaticText();
  renderProblems();

  if (selectedProblemIndex !== null) {
    selectProblem(selectedProblemIndex, { preserveCause: true });
  } else {
    selectedProblemNode.textContent = t('selectedPrompt');
    resetSolution();
  }
}

bindProblemListNavigation();
bindLanguageToggle();
applyLanguage();
