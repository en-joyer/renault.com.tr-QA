describe('Renault.com.tr - QA ', () => {

  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Script error')) {
        return false;
      }
      // Crossorigin hatası almakta. Onu elimine etmek için uncaught exception ekledim.
      return true;
    });

    cy.viewport('macbook-16')
    cy.visit('renault.com.tr')
  });
   
  it('Title ve URL Kontrolü', () => {
     cy.visit('www.renault.com.tr');
     cy.title('contain', 'Renault Türkiye' )
     cy.url('eq', 'https://www.renault.com.tr/') // https'ye yönlendiriyor mu? Farklı yönlendirmeler mevcut mu?
  });

  it('Navigasyon Menüsü Link Kontrolü > Modeller', () => {

    const listeOgeleri = ["Yetkili Satıcı Bulun", "Yeni Araç Alın", "Konfigüratör", "Fiyat Listeleri"];

      cy.get("button[class='MainMenuEntry__link']").click();
      cy.wait(1000);
      cy.get(".MainMenuModel__nameAndTags") // Araç modelleri modeller mevcut mu?
        .should('exist')
        .should('be.visible');
      cy.get('button[data-track-toggle-value="Binek Araçlar"] p')
      .should('exist')
      .should('be.visible');
      cy.get('button[data-track-toggle-value="Suv Araçlar"] p')
      .should('exist')
      .should('be.visible');
      cy.get('button[data-track-toggle-value="Ticari Araçlar"] p')
      .should('exist')
      .should('be.visible');
      cy.get('button[data-track-toggle-value="Elektrikli Araçlar"] p')
      .should('exist')
      .should('be.visible');
      cy.get('.MainMenuRangePicker__links')
      .should('exist')
      .should('be.visible')
      .then(($links) => {
        console.log('MainMenuRangePicker__links:', $links);
      });
    
      cy.log("Liste öğeleri gözüküyor mu?");
      cy.get('.MainMenuRangePicker__links') // listeOgeleri gözüküyor mu? 
      .find('a[title]')
      .then(($a) => {
        const bulunanOgeler = Array.from($a).map((element) => element.title);
    
        console.log('Beklenen Öğeler:', JSON.stringify(listeOgeleri));
        console.log('Gerçekleşen Öğeler:', JSON.stringify(bulunanOgeler));
    
        cy.then(() => {
          expect(bulunanOgeler).to.include.members(listeOgeleri);
    
          listeOgeleri.forEach((linkTitle) => {
            const linkVar = bulunanOgeler.some((title) => {
              return title.includes(linkTitle);
            });
    
            if (linkVar) {
              cy.log(`"${linkTitle}" kelimesi linklerde mevcut.`);
            } else {
              cy.log(`"${linkTitle}" kelimesi linklerde mevcut değil.`);
            }
          });
    
          cy.log('Beklenen Öğeler:', JSON.stringify(listeOgeleri));
          cy.log('Gerçekleşen Öğeler:', JSON.stringify(bulunanOgeler));
        });
      
      
      cy.log('Araçların resimleri görünüyor mu?')
      cy.get('.MainMenuRangeModels') // Araçların resimleri görünüyor mu?
      .find('.MainMenuModel')
      .each(($model) => 
      
        {

        if (!$model.find('.MainMenuModel__imageWrapper').length) 
        
        {
          cy.log('Hata: MainMenuModel__imageWrapper sınıfı bulunamadı.');
        } 
        
        else {
          const $img = $model.find('.MainMenuModel__imageWrapper img');
  
          if (!$img.length) 

          {
            cy.log('Hata: Img öğesi bulunamadı.');
          } 
          
          else {
            cy.wrap($img).then((img) => 
            
            {
              if (img[0].naturalWidth > 0) {
                cy.log('Resim yüklendi: ', img[0].src);
              } else {
                cy.log('Resim yüklenmedi: ', img[0].src);
              }
            });

          }
        }
      });
      cy.get(".MainMenuModel__nameAndTags")
      .find("a[title]")
      .then(($a) => {
        const bulunanOgeler = [];
        const bulunmayanOgeler = [];
    
        $a.each((index, element) => {
          const title = Cypress.$(element).attr("title");
          const href = Cypress.$(element).attr("href");
    
          const titleKelimeler = title.split(" ");
          const hrefKelimeler = href.split(" ");
    
          const bulunmayanKelimeler = titleKelimeler.filter((kelime) =>
            hrefKelimeler.every((hrefKelime) => !hrefKelime.includes(kelime))
          );
    
          if (bulunmayanKelimeler.length === titleKelimeler.length) {
            bulunanOgeler.push(title);
          } else {
            bulunmayanOgeler.push(title);
          }
        });
        console.log("Bulunan Öğeler:", JSON.stringify(bulunanOgeler))
        console.log("Bulunmayan Öğeler:", JSON.stringify(bulunmayanOgeler))
        cy.log("Bulunan Öğeler:", JSON.stringify(bulunanOgeler));
        cy.log("Bulunmayan Öğeler:", JSON.stringify(bulunmayanOgeler));
      });
    });
  })
})
