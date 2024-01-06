<template>
    <div class="advantages">
        <div class="container">
            <div class="advantages__list">
                <div class="advantages__list-item">
                    <CakeSvg />
                    <h4 class="advantages__title">Разнообразие товаров
                    </h4>
                    <p>Широкий ассортимент сырья и компонентов для
                        кондитерских производств</p>
                </div>
                <div class="advantages__list-item">
                    <UserStarsSvg />
                    <h4 class="advantages__title">6092 покупателей
                    </h4>
                    <p> Наши клиенты доверяют нам благодаря качественным
                        продуктам, надежным поставкам, профессионализму и
                        индивидуальному подходу к каждому заказчику.</p>

                </div>
                <div class="advantages__list-item">
                    <LikeSvg />
                    <h4 class="advantages__title">Доверие потребителей
                    </h4>
                    <p> Наша цель — предоставить клиентам возможность
                        делать осознанный выбор в пользу природы, не
                        ущемляя при этом качество и удобство использования
                        товаров.</p>

                </div>
                <div class="advantages__list-item">
                    <EcoSvg />
                    <h4 class="advantages__title">Экологичные товары
                    </h4>
                    <p> уверенность клиентов в честности и
                        профессионализме компании, ее готовности решать
                        проблемы и удовлетворять потребности клиентов.</p>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.advantages {
    margin-top: 106px;
    padding-top: 66px;
    padding-bottom: 56px;
    background: $main;



    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 60px;

        @include atLg {
            grid-template-columns: 1fr 1fr;
        }

        @include atSm {
            grid-template-columns: 1fr;
        }


        &-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h4 {
                color: white;
                font-size: 20px;
                font-weight: 700;
                text-align: center;
                margin-top: 20px;
            }

            p {
                font-weight: 400;
                color: white;
                text-align: center;
                margin-top: 10px;
            }
        }
    }
}</style>