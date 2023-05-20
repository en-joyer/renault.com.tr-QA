describe('Renault.com.tr - Arama Kutusu Testi', () => {
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
      it('Araç modeli > Clio', () => {

        const clio = ['Clio', 'CLIO']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('clio {enter}');
        cy.log('clio {enter}');
        
        cy.wait(1000)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (clio.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(clio) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(clio) +"kelimelerini içermiyor:", $el.text());
            }
          });
      });

      it('Araç modeli > Austral', () => {

        const austral = ['Austral', 'AUSTRAL', 'austral']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('austral {enter}');
        cy.log('austral {enter}');
        
        cy.wait(1000)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (austral.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(austral) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(austral) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });

      it('Yetkili Bayi İsmi > Türkçe Karakter', () => {

        const bayiIsmi = ['çiftçioğlu', 'ÇİFTÇİOĞLU', 'Çiftçioğlu']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('çiftçioğlu {enter}');
        cy.log('çiftçioğlu {enter}');
        
        cy.wait(2500)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (bayiIsmi.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(bayiIsmi) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(bayiIsmi) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });

      it('Yetkili Bayi İsmi > Türkçe Olmayan Karakterler', () => {

        const bayiIsmi = ['çiftçioğlu', 'ÇİFTÇİOĞLU', 'Çiftçioğlu']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('ciftcioglu {enter}');
        cy.log('ciftcioglu {enter}');
        
        cy.wait(1500)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (bayiIsmi.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(bayiIsmi) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(bayiIsmi) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });
      it('İletişim > Türkçe Karakterler', () => {

        const iletisim = ['iletişim', 'İLETİŞİM', 'İletişim']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('iletişim {enter}');
        cy.log('iletişim {enter}')
        
        cy.wait(1000)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (iletisim.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(iletisim) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(iletisim) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });

      it('İletişim > Türkçe Olmayan Karakterler', () => {

        const iletisim = ['iletişim', 'İLETİŞİM', 'İletişim']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('iletisim {enter}');
        cy.log('iletisim {enter}')
        
        cy.wait(1000)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (iletisim.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(iletisim) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(iletisim) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });

      it('Broşürler > Türkçe Karakterler', () => {

        const brosurler = ['broşürler', 'BROŞÜRLER', 'Broşürler']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('broşürler {enter}');
        cy.log('broşürler {enter}')
        
        cy.wait(1000)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (brosurler.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(brosurler) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(brosurler) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });

      it('Broşürler > Türkçe Olmayan Karakterler', () => {

        const brosurler = ['broşürler', 'BROŞÜRLER', 'Broşürler']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('brosurler {enter}');
        cy.log('brosurler {enter}');
        
        cy.wait(2000)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (brosurler.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(brosurler) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(brosurler) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });
      it('Görüntülü Görüşme > Türkçe Karakterler', () => {

        const goruntulu = ['görüntülü görüşme', 'Görüntülü Görüşme', 'GÖRÜNTÜLÜ GÖRÜŞME']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('görüntülü görüşme {enter}');
        cy.log('görüntülü görüşme {enter}');
        
        cy.wait(1000)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (goruntulu.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(goruntulu) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(goruntulu) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });
      it('Görüntülü Görüşme > Türkçe Olmayan Karakterler', () => {

        const goruntulu = ['görüntülü görüşme', 'Görüntülü Görüşme', 'GÖRÜNTÜLÜ GÖRÜŞME']

        cy.get('.SearchLink__button')
          .click();
        
        cy.get('.SearchForm__input')
          .type('goruntulu gorusme {enter}');
        cy.log('goruntulu gorusme {enter}');
        
        cy.wait(1000)
        
        cy.get('.SearchResult__containerWrapper p a').each(($el) => {
            if (goruntulu.some((keyword) => $el.text().includes(keyword))) {
                cy.log("Metin" + JSON.stringify(goruntulu) + "kelimelerini içeriyor:", $el.text());
            }
            else {
                cy.log("Metin" + JSON.stringify(goruntulu) + "kelimelerini içermiyor:", $el.text());
            }
          });
      });
      it('-1 araması', () => {
        cy.get('.SearchLink__button')
        .click();
        cy.get('.SearchForm__input')
        .type('-1 {enter}');
        cy.log('-1 {enter}');

        cy.wait(1000)

        cy.get('.SearchResult__containerWrapper p a').each(($el) => { 
            cy.log("Sonuçlar" + $el.text())
        })
      });
      it('admin araması', () => {
        cy.get('.SearchLink__button')
        .click();
        cy.get('.SearchForm__input')
        .type('admin {enter}');
        cy.log('admin {enter}');
      
        cy.wait(1000);
      
        cy.get('.SearchResult__containerWrapper p a')
        .should('not.exist');
      });
      it('Admin login araması', () => {
        cy.get('.SearchLink__button')
        .click();
        cy.get('.SearchForm__input')
        .type('admin login {enter}');
        cy.log('admin login {enter}');
      
        cy.wait(1000);
      
        cy.get('.SearchResult__containerWrapper p a')
        .should('not.exist');
      });
      it('Uzun metin araması', () => {
        cy.get('.SearchLink__button')
        .click();
        cy.get('.SearchForm__input')

        // 2 paragraf.
        .type(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Pharetra magna ac placerat vestibulum lectus. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Leo integer malesuada nunc vel risus commodo viverra maecenas. Imperdiet massa tincidunt nunc pulvinar. Sed enim ut sem viverra aliquet eget. Sapien faucibus et molestie ac. Senectus et netus et malesuada fames ac turpis egestas. Eget velit aliquet sagittis id consectetur purus ut faucibus. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Mauris nunc congue nisi vitae suscipit. Ultricies integer quis auctor elit sed vulputate. Massa tincidunt dui ut ornare lectus sit amet. Mattis vulputate enim nulla aliquet porttitor. Posuere morbi leo urna molestie at. Molestie ac feugiat sed lectus vestibulum mattis. Ut tortor pretium viverra suspendisse potenti nullam. Egestas egestas fringilla phasellus faucibus scelerisque. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Arcu dui vivamus arcu felis. Libero enim sed faucibus turpis in eu mi bibendum. Arcu dui vivamus arcu felis bibendum. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Leo a diam sollicitudin tempor id eu. Elit pellentesque habitant morbi tristique senectus. Quam vulputate dignissim suspendisse in est. In aliquam sem fringilla ut morbi. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. {enter}'
            );
        cy.log('2 paragraf lorem ipsum yazısı.');
      
        cy.wait(1000);
      
        cy.get('.SearchResult__containerWrapper p a')
        .should('not.exist');
      });
      
})