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
                  >Date of planting
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
                >{{ dateOfPlantingYieldCropInformation }}
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
                  >Date of crop yield</span
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
                dateOfCropYieldYieldCropInformation
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
                  >Yield quantity</span
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
                yieldQuantity
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
                  >Damage yield quantity</span
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
                damageYieldQuantity
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
                  >Selling price</span
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
                sellingPrice
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
                salesRevenue
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
      dateOfPlantingYieldCropInformation: "dateOfPlantingYieldCropInformation",
      dateOfCropYieldYieldCropInformation:
        "dateOfCropYieldYieldCropInformation",
      yieldQuantity: "yieldQuantity",
      damageYieldQuantity: "damageYieldQuantity",
      sellingPrice: "sellingPrice",
      salesRevenue: "salesRevenue"
    };
  }
};
</script>

<style></style>
