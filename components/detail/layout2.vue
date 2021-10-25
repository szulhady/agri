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
                  >Type of water pump
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
                >{{ typeOfWaterPump }}
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
                  >Water pump output</span
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
                waterPumpOutput
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
                  >Type of fertilizer</span
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
                typeOfFertilizer
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
                  >Type of insecticide</span
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
                typeOfInsecticide
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
                  >Type of nozzle</span
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
                typeOfNozzle
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
                  >Duration of flush</span
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
                durationOfFlush
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
                  >Date of planting</span
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
                dateOfPlanting
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
                dateOfCropYield
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
                  >Fertilizing date</span
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
                fertilizingDate
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
                  >Insecticide process date</span
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
                insecticideProcessDate
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
      typeOfWaterPump: "typeOfWaterPump",
      waterPumpOutput: "waterPumpOutput",
      typeOfFertilizer: "typeOfFertilizer",
      typeOfInsecticide: "typeOfInsecticide",
      typeOfNozzle: "typeOfNozzle",
      durationOfFlush: "durationOfFlush",
      dateOfPlanting: "dateOfPlanting",
      dateOfCropYield: "dateOfCropYield",
      fertilizingDate: "fertilizingDate",
      insecticideProcessDate: "insecticideProcessDate"
    };
  }
};
</script>

<style></style>
