<template>
  <section>
    <table style="border-collapse:collapse;border:none; margin: auto;">
      <tbody>
        <tr>
          <td
            style="width:162.8pt;border:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <strong
                ><span style='font-family:"Century Gothic",sans-serif;'
                  >Seasonal result
                </span></strong
              >
            </p>
          </td>
          <td
            style="width:288.0pt;border:solid windowtext 1.0pt;border-left:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <span style='font-family:"Century Gothic",sans-serif;'
                >{{ seasonalResult }}
              </span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <strong
                ><span style='font-family:"Century Gothic",sans-serif;'
                  >Annual result</span
                ></strong
              >
            </p>
          </td>
          <td
            style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <span style='font-family:"Century Gothic",sans-serif;'>{{
                annualResult
              }}</span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <strong
                ><span style='font-family:"Century Gothic",sans-serif;'
                  >Sales revenue</span
                ></strong
              >
            </p>
          </td>
          <td
            style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <span style='font-family:"Century Gothic",sans-serif;'>{{
                salesRevenueReport
              }}</span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <strong
                ><span style='font-family:"Century Gothic",sans-serif;'
                  >Yield improvement</span
                ></strong
              >
            </p>
          </td>
          <td
            style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <span style='font-family:"Century Gothic",sans-serif;'>{{
                yieldImprovement
              }}</span>
            </p>
          </td>
        </tr>
        <!-- <tr>
            <td style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Century Gothic",sans-serif;'>Client Contact Number</span></strong></p>
            </td>
            <td style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Century Gothic",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr> -->
        <tr>
          <td
            style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <strong
                ><span style='font-family:"Century Gothic",sans-serif;'
                  >Irrigation period</span
                ></strong
              >
            </p>
          </td>
          <td
            style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <span style='font-family:"Century Gothic",sans-serif;'>{{
                irrigationPeriod
              }}</span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <strong
                ><span style='font-family:"Century Gothic",sans-serif;'
                  >Rain intensity</span
                ></strong
              >
            </p>
          </td>
          <td
            style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <span style='font-family:"Century Gothic",sans-serif;'>{{
                rainIntensity
              }}</span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <strong
                ><span style='font-family:"Century Gothic",sans-serif;'
                  >Days of raining</span
                ></strong
              >
            </p>
          </td>
          <td
            style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <span style='font-family:"Century Gothic",sans-serif;'>{{
                daysOfRaining
              }}</span>
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="width:162.8pt;border:solid windowtext 1.0pt;border-top:  none;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <strong
                ><span style='font-family:"Century Gothic",sans-serif;'
                  >System breakdown</span
                ></strong
              >
            </p>
          </td>
          <td
            style="width:288.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:26.0pt;"
          >
            <p
              style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'
            >
              <span style='font-family:"Century Gothic",sans-serif;'>{{
                systemBreakdown
              }}</span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      seasonalResult: "seasonalResult",
      annualResult: "annualResult",
      salesRevenueReport: "salesRevenueReport",
      yieldImprovement: "yieldImprovement",
      irrigationPeriod: "irrigationPeriod",
      rainIntensity: "rainIntensity",
      daysOfRaining: "daysOfRaining",
      systemBreakdown: "systemBreakdown"
    };
  }
};
</script>

<style></style>
