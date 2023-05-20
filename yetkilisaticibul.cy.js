describe('Renault.com.tr - Yetkili Satıcı Bul Testi', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes('Script error')) {
            return false;
          }
          return true;
        });
      
        cy.viewport('macbook-16');
      
        cy.visit('https://www.renault.com.tr/yetkili-satici-bul.html', {
          onBeforeLoad(win) {
            cy.stub(win.navigator.permissions, 'query').resolves({ state: 'granted' });
          },
        });
      });

    it('Yakınımda Testi', () => {
        cy.get('.DealerLocator__localizeButton')
       .click()

        cy.wait(1000)

        cy.get('a.DealerContact__link').eq(0)
       .click()

       cy.get('a[href*="tel:"]').eq(0)

    });

    it('Manuel Arama Testi - Kayseri', () => {
        cy.get('#textfield')
        .wait(1000)
        .type("kayseri")
        .wait(1000)
        .type("{downArrow}")
        .wait(1000)
        .type("{enter}")
        
    });

    it('Manuel Arama Testi - Kayserı', () => {
        cy.get('#textfield')
        .wait(1000)
        .type("kayserı")
        .wait(2000)
        .type("{downArrow}")
        .type("{downArrow}")
        .wait(1000)
        .type("{enter}")
        
    });

    it('Filtrele Testi ', () => {
        cy.get('#textfield')
        .wait(1000)
        .type("ankara")
        .wait(1000)
        .type("{downArrow}")
        .wait(1000)
        .type("{downArrow}")
        .type("{enter}")
        cy.get('.DealerLocator__dealersListContainer > .DealerLocator__filterButtonContainer > .DealerLocator__filterButton')
        .click()
        
        const beklenenLabelContentler = [
            'Elektrikli Araç Satış',
            '2. El Araç Satış',
            'Yeni Araç Satış',
            'Elektrikli Araç Hizmet Merkezi',
            'Mekanik Atölye',
            'Pro+ Center',
            'Karoseri Atölyesi',
            'Yedek Parça',
            'Renault Dakik',
            'Yedek parça'
          ];
          
          const bulunanLabelContentler = []; // Bulunan labelContent'leri saklamak için boş bir array
          const bulunmayanLabelContentler = []; // Bulunamayan labelContent'leri saklamak için boş bir array
          
          cy.get('.DealerFilters__filters')
            .find('.CheckboxWrap__content > .CheckboxWrap__label > .CheckboxWrap__labelContent')
            .should('have.length.gt', 0) // `.CheckboxWrap__labelContent` öğesinin en az bir tane bulunduğunu doğrula
            .each(($label) => {
              const labelContent = $label.text().trim();
          
              cy.log('Label Content:', labelContent);
          
              if (!beklenenLabelContentler.includes(labelContent)) {
                cy.log('Uyuşmayan Label Content:', labelContent);
                bulunmayanLabelContentler.push(labelContent);
              } else {
                bulunanLabelContentler.push(labelContent);
              }
          
              cy.wrap($label)
                .closest('.CheckboxWrap__content')
                .find('.CheckboxWrap__boxContainer')
                .click();
            })
            .then(() => {
              cy.log('Bulunan Label Contentler:', JSON.stringify(bulunanLabelContentler));
              cy.log('Bulunmayan Label Contentler:', JSON.stringify(bulunmayanLabelContentler));
            });          
            cy.get('.DealerFilters__headerLink')
            .wait(2000)
            .click()
            cy.log("Filtreler temizlendi. ")
    });

    it('Haritadaki Butonların Kontrolü', () => {
        cy.get('#textfield')
        .wait(1000)
        .type("ankara")
        .wait(1000)
        .type("{downArrow}")
        .wait(1000)
        .type("{downArrow}")
        .type("{enter}")
        cy.wait(1000)
        cy.get('.DealocLegend__button')
        .click()
        cy.get('[aria-label="Büyüt"]')
        .click()
        .click()
        cy.get('[aria-label="Küçült"]')
        .click()
        .click()
        cy.get(':nth-child(9) > .gm-control-active')
        .click()
    });

})