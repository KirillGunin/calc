<template>
    <div class="container">
        <div class="calc"></div>
        <div class="calc-controls">
            <div class="calc-controls-items">
                <div class="display">
                    <div class="show">{{ recording }}</div>
                    <div class="result">{{ result }}</div>
                </div>
                <div class="line"></div>
                <div class="buttons">
                    <p class="button" @click="clear">C</p>
                    <p class="button" @click="sqrt">√</p>
                    <p class="button" @click="percent">%</p>
                    <p class="button" @click="addSign('/')">/</p>
                    <p class="button" @click="addSign('7')">7</p>
                    <p class="button" @click="addSign('8')">8</p>
                    <p class="button" @click="addSign('9')">9</p>
                    <p class="button" @click="addSign('x')">X</p>
                    <p class="button" @click="addSign('4')">4</p>
                    <p class="button" @click="addSign('5')">5</p>
                    <p class="button" @click="addSign('6')">6</p>
                    <p class="button" @click="addSign('-')">-</p>
                    <p class="button" @click="addSign('1')">1</p>
                    <p class="button" @click="addSign('2')">2</p>
                    <p class="button" @click="addSign('3')">3</p>
                    <p class="button" @click="addSign('+')">+</p>
                    <p class="button" @click="removeSign">→</p>
                    <p class="button" @click="addSign('0')">0</p>
                    <p class="button" @click="addSign(',')">,</p>
                    <p class="button-result" @click="calculate">=</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recording: '',
            result: '0'
        }
    },
    methods: {
        addSign(sign) {
            if(this.recording == '' && (sign == '/' || sign == 'x' || sign == '-' || sign == '+' || sign == ',')){
                this.recording = ''
            }
            if(this.recording == '0') {
                this.recording = '0,'
            } else {
                this.recording += sign
            }
        },
        removeSign() {
            this.recording = this.recording.substring(0, this.recording.length - 1)
        },
        clear() {
            this.recording = ''
            this.result = '0'
        },
        calculate() {
            let calc = this.recording
            this.result = calc
            calc = calc.replace('x', '*')
            this.result = eval(calc)
        },
        percent() {
            this.result = parseFloat(this.recording / 100)
        },
        sqrt() {
            this.result = Math.sqrt(this.recording)
        }
    }
}
</script>

<style lang="scss">
.calc {
    width: 616px;
    height: 876px;
    background: #FFFFFF;
    border-radius: 18px;
    opacity: 20%;
    backdrop-filter: blur(2px);
    position: absolute;
}
.calc-controls {
    background: linear-gradient(155.23deg, #28518E 0%, #3A77D1 100%);
    border-radius: 18px;
    width: 554px;
    height: 800px;
    padding: 16px 47px;
    position: relative;
    box-shadow: 0px 82px 158px rgba(0, 0, 0, 0.35), 0px 24.7206px 47.6324px rgba(0, 0, 0, 0.228056), 0px 10.2677px 19.7841px rgba(0, 0, 0, 0.175), 0px 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);
}
.calc-controls-items{
    width: 460px;
    .display {
        height: 221px;
        .show {
            height: 117px;
            margin-bottom: 28px;
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            color: #F2F2F2;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }
        .result {
            height: 76px;
            font-size: 56px;
            font-weight: 700;
            background: transparent;
            color: #F2F2F2;
            text-align: right;
        }
    }
    .line {
        height: 0px;
        opacity: 0.35;
        border: 2px solid #FFFFFF;
        margin-top: 18px;
        margin-bottom: 37px;
    }
    .buttons {
        grid-template-columns: repeat(4, 1fr);
        margin: 0 auto;
        grid-gap: 16px 20px;
        display: grid;
        height: 464px;
    }
    .button-result {
        height: 80px;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        color: #2B589A;
        line-height: 88px;
        font-weight: 500;
        border-radius: 50%;
        background: #FFFFFF;
        margin: 0 auto;
    }
    .button {
        height: 80px;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        color: #F2F2F2;
        line-height: 88px;
        font-weight: 500;
        border-radius: 50%;
        margin: 0 auto;
    }
    .button:hover {
        background: rgb(255, 255, 255, 0.12);
        cursor: pointer;
    }
}
</style>