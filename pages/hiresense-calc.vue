<template>
  <section>
    <main-nav class="nav"></main-nav>
    <div class="hero">
      <div class="container"
        style="background-color: #1988ff; border-radius: 10px; box-shadow: 1px 3px 4px black; margin-bottom: 30px;">
        <div
          style="background-color: white; border-radius: 10px 10px 0px 0px; box-shadow: 3px 2px 5px black; margin-top: 20px; padding-left: 20px;">
          <img class="logo" src="~/assets/logo copy.svg" width="180" height="51" alt="HireSense logo"
            style="margin: 5px 0px;">
        </div>
        <div style="padding: 0px 20px;">
          <p>Employers spend an enormous amount on hiring—an average of $4,129 per job in the United States,
            according to
            Society for Human Resource Management estimates, and many times that amount for managerial roles—and
            the
            United
            States fills a staggering 66 million jobs a year. Most of the $20 billion that companies spend on
            human
            resources vendors goes to hiring.
          </p>
          <h3 style="font-weight: 600;">What is HireSense?</h3>
          <p>A subscription based hiring process saving time and money, while elevating the quality of hire
            Instead of per-test fees, a subscription gives unlimited use of the features of HireSense. <br />
            This is better because of: <br />
          <ul style="padding-bottom: 30px;">
            <li>
              Predictable costs: total cost is known before you get started.
            </li>
            <li>Lower total costs: The effectiveness of HireSense delivering accurate data reduces time to make
              a
              decision
              and reduces the cost of multiple interviews.
            </li>
            <li>
              Reduced time spent on hiring process: Instead of a screening interview for all applicants the
              final
              decision
              making interview it reserved for the best fit applicants, the ones at the top of the "hiring
              funnel."
            </li>
          </ul>
          </p>
        </div>
      </div>
    </div>
    <div class="calculator">
      <div class="container">
        <div class="col-12" style="width: 100%;">
          <h1
            style="margin-top: 50px; box-shadow: 3px 3px 5px black; background-color: #fe6702; padding: 10px; font-style: italic; width: 100%; text-align: center; border-radius: 10px; color: #1d1d1d;">
            HireSense app Subscription Requires Certification Training
          </h1>
        </div>
        <div class="row">
          <div class="col-6" style="text-align: center;">
            <h2 style="text-align: left; margin-left: 50px; color: #027bfe;">Company Information</h2>
            <div class="input-group">
              <div class="label-input-pair">
                <h3>Employees</h3>
                <input type="number" v-model.number="employees" style="max-width: 150px;" />
              </div>
              <div class="label-input-pair">
                <h3>Average Salary</h3>
                <input type="text" :value="formattedDollarsSalary" @input="updateAverageSalary($event.target.value)"
                  style="max-width: 150px;" />
              </div>
              <div class="label-input-pair">
                <h3>Average Attrition</h3>
                <input type="text" v-model="averageAttritionRaw" @blur="formatAverageAttrition" step="0.01"
                  style="max-width: 150px;" />
              </div>
              <div class="label-input-pair">
                <h3>Monthly Applicants</h3>
                <input type="number" v-model.number="monthlyApplicants" style="max-width: 150px;" />
              </div>
            </div>
          </div>
          <div class="col-6" style="text-align: center;">
            <h2 style="text-align: left; margin-left: 50px;">Results with HireSense</h2>
            <div class="col-6">
              <h3>Attrition rate <br />
                change</h3>
              <input type="text" v-model="averageAttritionChangeRaw" @blur="formatAverageAttritionChange" step="0.01"
                style="background-color: #d9eafd; max-width: 130px; min-height: 50px; text-align: center; border-radius: 5px;" />
            </div>
            <div class="col-6">
              <h3>Reduction in <br />
                Annual Hiring Cost</h3>
              <input type="text" v-model="averageReductionRaw" @blur="formatAverageReduction" step="0.01"
                style="background-color: #d9eafd; max-width: 130px; min-height: 50px; text-align: center; border-radius: 5px;" />
            </div>
          </div>
        </div>
        <hr
          style="height: 5px; border: none; background-color: #1d1d1d; box-shadow: 2px 2px 8px darkgray; margin-top: 20px; margin-bottom: 10px; border-radius: 20px;">
        <div class="row">
          <div class="col-6">
            <h2 style="margin-left: 50px;">What Turnover costs currently</h2>
            <div class="row" style="text-align: center;">
              <div class="col-8">
                <h3>Current annual employee loss</h3>
              </div>
              <div class="col-4">
                <h2 style="color: red; margin-top: 15px;">{{ currentAnnualEmployeeLoss }}</h2>
              </div>
            </div>
            <div class="row" style="text-align: center;">
              <div class="col-6">
                <h3>Cost to replace <br />
                  per employee</h3>
                <h2>{{ formatCurrency(costToReplace) }}</h2>
              </div>
              <div class="col-6">
                <h3>Annual cost <br />
                  to Replace</h3>
                <h2>{{ formatCurrency(annualCostToReplace) }}</h2>
              </div>
            </div>
            <div class="row" style="text-align: center;">
              <div class="col-6">
                <h3>From Attrition <br />
                  calculator</h3>
                <input type="text" :value="formattedDollarsAttritionCalculator"
                  @input="updateAttritionCalculator($event.target.value)"
                  style="background-color: #d9eafd; max-width: 180px; min-height: 50px; text-align: center; border-radius: 5px;" />
              </div>
              <div class="col-6">
                <h3>Annual cost from <br />
                  Attrition calculator</h3>
                <h2>{{ formatCurrency(annualAttritionCalculator) }}</h2>
              </div>
            </div>
            <div class="row" style="text-align: center;">
              <div class="col-8">
                <h3>Monthly management</h3>
              </div>
              <div class="col-4">
                <input type="text" :value="formattedDollarsMonthlyFee" @input="updateMonthlyFee($event.target.value)"
                  style="background-color: #d9eafd; max-width: 130px; min-height: 50px; text-align: center; border-radius: 5px;" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <h2 style="text-align: center;">What you get</h2>
            <div class="row" style="text-align: center;">
              <div class="col-8">
                <h3>Annual Tool Subscription</h3>
              </div>
              <div class="col-4">
                <h3>$160.00</h3>
              </div>
            </div>
            <div class="row" style="text-align: center;">
              <div class="col-8">
                <h3>Annual fee for use</h3>
              </div>
              <div class="col-4">
                <h3>{{ formatCurrency(annualFeeForUse) }}</h3>
              </div>
            </div>
            <div class="row" style="text-align: center;">
              <div class="col-8">
                <h3>Expected annual employee loss</h3>
              </div>
              <div class="col-4">
                <h2 style="color: red; margin-top: 15px;">{{ expectedAnnualEmployeeLoss }}</h2>
              </div>
            </div>
            <div class="row" style="text-align: center;">
              <div class="col-8">
                <h3>Expected annual cost to replace</h3>
              </div>
              <div class="col-4">
                <h2>{{ formatCurrency(expectedAnnualCostToReplace) }}</h2>
              </div>
            </div>
            <div class="row rowMedia"
              style="box-shadow: 3px 3px 10px black; background-color: #027bfe; color: white; border-radius: 10px; width: 85%; padding-right: 35px; float: right; margin: 20px 0;">
              <div class="col-7" style="text-align: right; margin-bottom: -20px;">
                <h3>Annual Savings - <br />
                  Attrition Calculator
                </h3>
              </div>
              <div class="col-5" style="text-align: center; margin-top: 4px;">
                <h2>{{ formatCurrency(annualSavingsAttritionCalculator) }}</h2>
              </div>
              <div class="col-7" style="text-align: right;">
                <h3>Annual Savings - <br />
                  Current
                </h3>
              </div>
              <div class="col-5" style="text-align: center; margin-top: 3px;">
                <h2>{{ formatCurrency(annualSavingsCurrent) }}</h2>
              </div>
            </div>
          </div>
        </div>
        <hr
          style="height: 5px; border: none; background-color: #1d1d1d; box-shadow: 2px 2px 8px darkgray; margin-top: 33px; margin-bottom: -20px; border-radius: 10px;">
        <div class="row">
          <h2
            style="text-align: center; padding: 10px 0px; background-color: #fe6702; box-shadow: 0px 2px 5px #232323; border-radius: 0px 0px 0px 0px;">
            Estimated with HireSense</h2>
          <div class="col-6">
            <div class="row" style="text-align: left;">
              <div class="col-8">
                <h3>new Cost to replace</h3>
              </div>
              <div class="col-4">
                <h2 style="margin-top: 15px;">{{ formatCurrency(newCostToReplace) }}</h2>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row" style="text-align: left;">
              <div class="col-9">
                <h3>Annual cost with HireSense reductions</h3>
              </div>
              <div class="col-3">
                <h2 style="margin-top: 15px;">{{ formatCurrency(annualCostWithHireSenseReductions) }}</h2>
              </div>
            </div>
          </div>
        </div>
        <hr
          style="height: 5px; border: none; background-color: #1d1d1d; box-shadow: 2px 2px 8px darkgray; margin-top: 20px; margin-bottom: 0px; border-radius: 20px;">
      </div>
    </div>
    <div style="width: 100%; height: 100px; background-color: #027bfe; margin-top: 70px;">
      <div class="container" style="padding-top: 12px; display: flex; justify-content: center;">
        <div>
          <img class="logo" src="~/assets/powered-by.png" alt="HireSense logo" style=" width: 100%; margin-top: 15px;">
        </div>
      </div>
    </div>
    <footer-fold></footer-fold>
  </section>
</template>


<script>
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default {
  data() {
    return {
      employees: 10,
      averageSalary: 50000,
      averageAttrition: 0.15,
      monthlyApplicants: 4,
      attritionRateChange: 0.05,
      reductionInHiringCost: 0.1,
      annualToolSubscription: 160,
      annualFeeForUse: 1940,
      planBSubscriptions: 1,
      monthlyManagementFee: 0,
      costToReplace1: 0,
      newCostToReplace1: 0,
      expectedAnnualEmployeeLoss1: 0,
      annualCostWithHireSenseReductions1: 0,
      expectedAnnualCostToReplace1: 0,
      annualAttritionCalculator1: 0,
      annualCostToReplace1: 0,
      attritionCalculatorInput: 25983,
      salaryRanges: [
        { min: 0, max: 24500, cost: 3185 },
        { min: 24501, max: 35000, cost: 4900 },
        { min: 35001, max: 45000, cost: 6750 },
        { min: 45001, max: 47500, cost: 8550 },
        { min: 47501, max: 65000, cost: 13750 },
        { min: 65001, max: 75000, cost: 18750 },
        { min: 75001, max: 90000, cost: 31500 },
        { min: 90001, max: 125000, cost: 62500 },
        { min: 125001, max: 150000, cost: 90000 },
      ],
      averageAttritionRaw: '15%',
      averageAttritionChangeRaw: '5%',
      averageReductionRaw: '10%',
    };
  },
  computed: {
    formattedDollarsSalary() {
      return this.formatCurrency(this.averageSalary);
    },
    formattedDollarsAttritionCalculator() {
      return this.formatCurrency(this.attritionCalculatorInput);
    },
    formattedDollarsMonthlyFee() {
      return this.formatCurrency(this.monthlyManagementFee);
    },
    currentAnnualEmployeeLoss() {
      const result = this.employees * this.averageAttrition;
      const roundedResult = Math.ceil(result);
      console.log('Current annual employee loss (rounded):', roundedResult);
      return roundedResult;
    },
    costToReplace() {
      const result = this.lookupCost(this.averageSalary);
      console.log('Cost to replace:', result);
      this.costToReplace1 = result;
      console.log('Cost to replace1:', result);
      return result;
    },
    annualAttritionCalculator() {
      const result = this.attritionCalculatorInput * this.currentAnnualEmployeeLoss;
      console.log('Cost to replace166:', this.attritionCalculatorInput);
      console.log('Cost to replace177:', this.currentAnnualEmployeeLoss);
      this.annualAttritionCalculator1 = result;
      return result;
    },
    annualCostToReplace() {
      const result = this.currentAnnualEmployeeLoss * this.costToReplace;
      this.annualCostToReplace1 = result;
      console.log('Annual cost to replace:', result);
      return result;
    },
    monthlyManagement() {
      const result = this.fromAttritionCalculator / 12;
      console.log('Monthly management:', result);
      return result;
    },
    expectedAnnualEmployeeLoss() {
      const result = this.employees * this.averageAttrition * (1 - this.attritionRateChange);
      const roundedResult = Math.round(result);
      this.expectedAnnualEmployeeLoss1 = roundedResult;
      console.log('Expected annual employee loss rounded:', roundedResult);
      return roundedResult;
    },
    expectedAnnualCostToReplace() {
      const result = this.annualCostWithHireSenseReductions1 + this.annualFeeForUse + this.annualToolSubscription + (this.monthlyManagementFee * 12);
      this.expectedAnnualCostToReplace1 = result;
      console.log('Expected annual cost to replace:', result);
      return result;
    },
    annualSavingsAttritionCalculator() {
      if (this.attritionCalculatorInput > 0) {
        const result = this.annualAttritionCalculator1 - this.expectedAnnualCostToReplace1;
        console.log("This is 1", this.annualAttritionCalculator1);
        console.log("This is 2", this.expectedAnnualCostToReplace1);
        console.log("This is the results", result);
        return result;
      } else {
        return 0;
      }
    },
    annualSavingsCurrent() {
      if (this.annualCostToReplace1 > 0) {
        const result = this.annualCostToReplace1 - this.expectedAnnualCostToReplace1;
        console.log("This is attritionCalculatorInput", this.attritionCalculatorInput);
        console.log("This is the results", result);
        return result;
      } else {
        return 0;
      }
    },
    newCostToReplace() {
      const selectedValue = this.attritionCalculatorInput > 0 ? this.attritionCalculatorInput : this.costToReplace1;
      const result = selectedValue * (1 - this.reductionInHiringCost);
      this.newCostToReplace1 = result;
      console.log('New SelectedValue:', selectedValue);
      console.log('New Cost to Replace:', result);
      return result;
    },
    annualCostWithHireSenseReductions() {
      const result = this.newCostToReplace1 * this.expectedAnnualEmployeeLoss1;
      this.annualCostWithHireSenseReductions1 = result;
      console.log('Annual cost with HireSense reductions:', result);
      return result;
    }
  },
  watch: {
    averageAttritionRaw(newVal) {
      this.updateNumericValue('averageAttrition', newVal);
    },
    averageAttritionChangeRaw(newVal) {
      this.updateNumericValue('attritionRateChange', newVal);
    },
    averageReductionRaw(newVal) {
      this.updateNumericValue('reductionInHiringCost', newVal);
    }
  },
  methods: {
    updateNumericValue(field, value) {
      const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, "")) / (field.includes('attrition') || field.includes('Attrition') || field.includes('reduction') ? 100 : 1);
      this[field] = isNaN(numericValue) ? 0 : numericValue;
    },
    formatAverageAttrition() {
      this.averageAttritionRaw = this.formatPercentage(this.averageAttrition);
    },
    formatAverageAttritionChange() {
      this.averageAttritionChangeRaw = this.formatPercentage(this.attritionRateChange);
    },
    formatAverageReduction() {
      this.averageReductionRaw = this.formatPercentage(this.reductionInHiringCost);
    },
    updateAverageSalary(value) {
      const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
      this.averageSalary = isNaN(numericValue) ? 0 : numericValue;
    },
    updateAttritionCalculator(value) {
      const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
      this.attritionCalculatorInput = isNaN(numericValue) ? 0 : numericValue;
    },
    updateMonthlyFee(value) {
      const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
      this.monthlyManagementFee = isNaN(numericValue) ? 0 : numericValue;
    },
    formatCurrency(value) {
      return `$${value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    },
    formatPercentage(value) {
      return `${(value * 100).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}%`;
    },
    formatNumber(value) {
      return value.toFixed(2);
    },
    lookupCost(salary) {
      for (let range of this.salaryRanges) {
        if (salary >= range.min && salary <= range.max) {
          console.log('Lookup value for salary', salary, ':', range.cost);
          return range.cost;
        }
      }
      return 0; // Default cost if no range matches
    }
  },
  components: {
    'main-nav': Nav,
    'footer-fold': Footer
  },
  head() {
    return {
      title: 'HIRESENSE CALCULATOR | Assessments 24x7',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A tool to estimate the cost of adding new employees.'
        }
      ]
    }
  }
}
</script>


<style scoped>
h1 {
  font-size: 32px;
  line-height: 38.4px;
}

h2 {
  font-size: 24px;
  line-height: 31.2px;
}

h3 {
  font-size: 18.72px;
  line-height: 26.2px;
}

h4 {
  font-size: 16px;
  line-height: 24px;
}

h5 {
  font-size: 13.28px;
  line-height: 21.2px;
}

.hero {
  background-color: #027bfe;
  color: white;
  padding: 20px 20px;
}

input {
  cursor: pointer;
  font-size: 18px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: right;
}

.label-input-pair {
  display: flex;
  align-items: center;
}

.label-input-pair h3 {
  margin-right: 10px;
  width: 100%;
  text-align: center;
}

.label-input-pair input {
  background-color: #d9eafd;
  flex: 1;
  padding: 5px;
  font-size: 1em;
  text-align: right;
  border-radius: 5px;
}

@media (max-width: 1000px) {
  .rowMedia {
    width: 100% !important;
    padding-right: 0px !important;
    margin: 0px 0px !important;
  }

  .rowMedia .col-7 {
    text-align: center !important;
    margin-bottom: -20px !important;
  }

  .top {
    margin-top: 0px !important;
  }

  .topResults {
    margin-top: 0px !important;
  }
}

/* colors
#027bfe blue
#7e02fe purple
#fe6702 orange 
*/
</style>
