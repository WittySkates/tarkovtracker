/** @module AmmoChartManual */

import React from "react";
import "./styles/attributions.scss";

const AmmoChartManual = () => {
  return (
    <div className="scrollable" style={{ marginLeft: "20%" }}>
      <table class="wikitable sortable jquery-tablesorter" id="trkballtable">
        <thead>
          <tr>
            <th colspan="8"></th>
            <th style={{ position: "sticky", top: "5px" }} colspan="2">
              Bleed&nbsp;%
            </th>
            <th style={{ position: "sticky", top: "5px" }} colspan="6">
              Bullet effectiveness against armor class
            </th>
          </tr>
          <tr class="stickyrow">
            <th style={{ position: "sticky", top: "5px" }}>Caliber</th>
            <th style={{ position: "sticky", top: "5px" }}>Name</th>
            <th style={{ position: "sticky", top: "5px" }}>Damage</th>
            <th style={{ position: "sticky", top: "5px" }}>
              Penetration
              <br />
              power
            </th>
            <th style={{ position: "sticky", top: "5px" }}>
              Armor
              <br />
              damage&nbsp;%
            </th>
            <th style={{ position: "sticky", top: "5px" }}>
              Accuracy
              <br />%
            </th>
            <th style={{ position: "sticky", top: "5px" }}>Recoil</th>
            <th style={{ position: "sticky", top: "5px" }}>
              Frag.
              <br />
              chance*
            </th>
            <th style={{ position: "sticky", top: "32px" }}>L.</th>
            <th style={{ position: "sticky", top: "32px" }}>H.</th>
            <th style={{ position: "sticky", top: "32px" }}>1</th>
            <th style={{ position: "sticky", top: "32px" }}>2</th>
            <th style={{ position: "sticky", top: "32px" }}>3</th>
            <th style={{ position: "sticky", top: "32px" }}>4</th>
            <th style={{ position: "sticky", top: "32px" }}>5</th>
            <th style={{ position: "sticky", top: "32px" }}>6</th>
          </tr>
          <tr>
            <th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">
              &nbsp;
            </th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
            <th
              class="headerSort"
              tabindex="0"
              role="columnheader button"
              title="Sort ascending"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr id="12x70mm_anchor">
            <td style={{ borderBottom: "solid 2px" }} rowspan="16">
              <a href="/wiki/12x70mm" title="12x70mm">
                12x70mm
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/12/70_5.25mm_Buckshot" title="12/70 5.25mm Buckshot">
                12/70 5.25mm Buckshot
              </a>
              **{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td data-sort-value="296">8x37</td>
            <td>1</td>
            <td>15</td>
            <td></td>
            <td></td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a
                href="/wiki/12/70_8.5mm_%22Magnum%22_Buckshot"
                title='12/70 8.5mm "Magnum" Buckshot'
              >
                12/70 8.5mm "Magnum" Buckshot
              </a>
              **
            </td>
            <td data-sort-value="400">8x50</td>
            <td>2</td>
            <td>26</td>
            <td>
              <font color="red">-15</font>
            </td>
            <td>
              <font color="red">+115</font>
            </td>
            <td>0%</td>
            <td>20%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_6.5mm_Express_buckshot" title="12/70 6.5mm Express buckshot">
                12/70 6.5mm Express buckshot
              </a>
              **
            </td>
            <td data-sort-value="315">9x35</td>
            <td>3</td>
            <td>26</td>
            <td>
              <font color="green">+15</font>
            </td>
            <td></td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_7mm_buckshot" title="12/70 7mm buckshot">
                12/70 7mm buckshot
              </a>
              **
            </td>
            <td data-sort-value="312">8x39</td>
            <td>3</td>
            <td>26</td>
            <td></td>
            <td></td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_Flechette" title="12/70 Flechette">
                12/70 Flechette
              </a>
              **{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td data-sort-value="200">8x25</td>
            <td>31</td>
            <td>26</td>
            <td>
              <font color="red">-10</font>
            </td>
            <td></td>
            <td>0%</td>
            <td>25%</td>
            <td>25%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_RIP" title="12/70 RIP">
                12/70 RIP
              </a>
            </td>
            <td>265</td>
            <td>2</td>
            <td>11</td>
            <td>
              <font color="green">+80</font>
            </td>
            <td>
              <font color="red">+35</font>
            </td>
            <td>100%</td>
            <td>40%</td>
            <td>25%</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_SuperFormance_HP_Slug" title="12/70 SuperFormance HP Slug">
                12/70 SuperFormance HP Slug
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>220</td>
            <td>5</td>
            <td>12</td>
            <td>
              <font color="green">+170</font>
            </td>
            <td>
              <font color="green">-15</font>
            </td>
            <td>39%</td>
            <td>30%</td>
            <td>40%</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_Grizzly_40_Slug" title="12/70 Grizzly 40 Slug">
                12/70 Grizzly 40 Slug
              </a>
            </td>
            <td>190</td>
            <td>12</td>
            <td>48</td>
            <td>
              <font color="green">+80</font>
            </td>
            <td>
              <font color="red">+20</font>
            </td>
            <td>12%</td>
            <td></td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a
                href="/wiki/12/70_Copper_Sabot_Premier_HP_Slug"
                title="12/70 Copper Sabot Premier HP Slug"
              >
                12/70 Copper Sabot Premier HP Slug
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>206</td>
            <td>14</td>
            <td>46</td>
            <td>
              <font color="green">+150</font>
            </td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>38%</td>
            <td>35%</td>
            <td>25%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_lead_slug" title="12/70 lead slug">
                12/70 lead slug
              </a>
            </td>
            <td>167</td>
            <td>15</td>
            <td>55</td>
            <td>
              <font color="green">+120</font>
            </td>
            <td></td>
            <td>20%</td>
            <td>10%</td>
            <td>15%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_%22Poleva-3%22_Slug" title='12/70 "Poleva-3" Slug'>
                12/70 "Poleva-3" Slug
              </a>
            </td>
            <td>140</td>
            <td>17</td>
            <td>40</td>
            <td>
              <font color="green">+110</font>
            </td>
            <td>
              <font color="green">-15</font>
            </td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_Dual_Sabot_Slug" title="12/70 Dual Sabot Slug">
                12/70 Dual Sabot Slug
              </a>
            </td>
            <td data-sort-value="170">2x85</td>
            <td>17</td>
            <td>65</td>
            <td>
              <font color="green">+100</font>
            </td>
            <td>
              <font color="red">+15</font>
            </td>
            <td>10%</td>
            <td></td>
            <td>15%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_FTX_Custom_Lite_Slug" title="12/70 FTX Custom Lite Slug">
                12/70 FTX Custom Lite Slug
              </a>
            </td>
            <td>183</td>
            <td>20</td>
            <td>50</td>
            <td>
              <font color="green">+135</font>
            </td>
            <td>
              <font color="green">-25</font>
            </td>
            <td>10%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12/70_%22Poleva-6u%22_Slug" title='12/70 "Poleva-6u" Slug'>
                12/70 "Poleva-6u" Slug
              </a>
            </td>
            <td>150</td>
            <td>20</td>
            <td>50</td>
            <td>
              <font color="green">+115</font>
            </td>
            <td>
              <font color="green">-10</font>
            </td>
            <td>15%</td>
            <td></td>
            <td>5%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a
                href="/wiki/12/70_shell_with_.50_BMG_bullet"
                title="12/70 shell with .50 BMG bullet"
              >
                12/70 shell with .50 BMG bullet
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>197</td>
            <td>26</td>
            <td>57</td>
            <td>
              <font color="green">+90</font>
            </td>
            <td>
              <font color="red">+25</font>
            </td>
            <td>5%</td>
            <td></td>
            <td>15%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "solid 2px" }} rowspan="1">
              <a href="/wiki/12/70_AP-20_Slug" title="12/70 AP-20 Slug">
                12/70 AP-20 Slug
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>164</td>
            <td style={{ borderBottom: "solid 2px" }}>37</td>
            <td style={{ borderBottom: "solid 2px" }}>65</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="green">+80</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+50</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>3%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>10%</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr id="20x70mm_anchor">
            <td style={{ borderBottom: "solid 2px" }} rowspan="8">
              <a href="/wiki/20x70mm" title="20x70mm">
                20x70mm
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/20/70_5.6mm_Buckshot" title="20/70 5.6mm Buckshot">
                20/70 5.6mm Buckshot
              </a>
              **{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td data-sort-value="208">8x26</td>
            <td>1</td>
            <td>12</td>
            <td>
              <font color="red">-10</font>
            </td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/20/70_6.2mm_Buckshot" title="20/70 6.2mm Buckshot">
                20/70 6.2mm Buckshot
              </a>
              **
            </td>
            <td data-sort-value="176">8x22</td>
            <td>2</td>
            <td>13</td>
            <td></td>
            <td></td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/20/70_7.5mm_buckshot" title="20/70 7.5mm buckshot">
                20/70 7.5mm buckshot
              </a>
              **
            </td>
            <td data-sort-value="200">8x25</td>
            <td>3</td>
            <td>14</td>
            <td></td>
            <td></td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/20/70_7.3mm_Buckshot" title="20/70 7.3mm Buckshot">
                20/70 7.3mm Buckshot
              </a>
              **
            </td>
            <td data-sort-value="207">9x23</td>
            <td>3</td>
            <td>13</td>
            <td></td>
            <td>
              <font color="red">+15</font>
            </td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/20/70_Devastator_Slug" title="20/70 Devastator Slug">
                20/70 Devastator Slug
              </a>
            </td>
            <td>198</td>
            <td>5</td>
            <td>13</td>
            <td>
              <font color="green">+125</font>
            </td>
            <td>
              <font color="red">+30</font>
            </td>
            <td>100%</td>
            <td>20%</td>
            <td>30%</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/20/70_%22Poleva-3%22_slug" title='20/70 "Poleva-3" slug'>
                20/70 "Poleva-3" slug
              </a>
            </td>
            <td>120</td>
            <td>14</td>
            <td>35</td>
            <td>
              <font color="green">+110</font>
            </td>
            <td>
              <font color="green">-15</font>
            </td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/20/70_Star_Slug" title="20/70 Star Slug">
                20/70 Star Slug
              </a>
            </td>
            <td>154</td>
            <td>16</td>
            <td>42</td>
            <td>
              <font color="green">+130</font>
            </td>
            <td>
              <font color="red">+5</font>
            </td>
            <td>10%</td>
            <td></td>
            <td>30%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "solid 2px" }} rowspan="1">
              <a href="/wiki/20/70_%22Poleva-6u%22_slug" title='20/70 "Poleva-6u" slug'>
                20/70 "Poleva-6u" slug
              </a>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>135</td>
            <td style={{ borderBottom: "solid 2px" }}>17</td>
            <td style={{ borderBottom: "solid 2px" }}>40</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="green">+110</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="green">-10</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>15%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>10%</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#dd333380" }}>1</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#b3242580" }}>0</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#b3242580" }}>0</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr id="23x75mm_anchor">
            <td style={{ borderBottom: "solid 2px" }} rowspan="4">
              <a href="/wiki/23x75mm" title="23x75mm">
                23x75mm
              </a>
            </td>
            <td>
              <a
                href="/wiki/23x75mm_%22Zvezda%22_flashbang_round"
                title='23x75mm "Zvezda" flashbang round'
              >
                23x75mm "Zvezda" flashbang round
              </a>{" "}
              <sup>
                <s>
                  <i>
                    <b>FM</b>
                  </i>
                </s>
              </sup>
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td></td>
            <td></td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td>
              <a href="/wiki/23x75mm_Shrapnel-25_buckshot" title="23x75mm Shrapnel-25 buckshot">
                23x75mm Shrapnel-25 buckshot
              </a>
              **{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td data-sort-value="624">8x78</td>
            <td>10</td>
            <td>20</td>
            <td>
              <font color="green">+20</font>
            </td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td>
              <a
                href="/wiki/23x75mm_%22Shrapnel-10%22_buckshot"
                title='23x75mm "Shrapnel-10" buckshot'
              >
                23x75mm "Shrapnel-10" buckshot
              </a>
              **{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td data-sort-value="696">8x87</td>
            <td>11</td>
            <td>20</td>
            <td></td>
            <td></td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/23x75mm_%22Barrikada%22_slug" title='23x75mm "Barrikada" slug'>
                23x75mm "Barrikada" slug
              </a>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>192</td>
            <td style={{ borderBottom: "solid 2px" }}>39</td>
            <td style={{ borderBottom: "solid 2px" }}>75</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">-5</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+25</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>20%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
          </tr>
          <tr id="9x18mm_Makarov_anchor">
            <td style={{ borderBottom: "solid 2px" }} rowspan="14">
              <a href="/wiki/9x18mm_Makarov" title="9x18mm Makarov">
                9x18mm Makarov
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_SP8_gzh" title="9x18mm PM SP8 gzh">
                9x18mm PM SP8 gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>67</td>
            <td>1</td>
            <td>2</td>
            <td></td>
            <td></td>
            <td>60%</td>
            <td>15%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_SP7_gzh" title="9x18mm PM SP7 gzh">
                9x18mm PM SP7 gzh
              </a>
            </td>
            <td>77</td>
            <td>2</td>
            <td>5</td>
            <td></td>
            <td></td>
            <td>2%</td>
            <td>25%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_PSV" title="9x18mm PM PSV">
                9x18mm PM PSV
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>69</td>
            <td>3</td>
            <td>5</td>
            <td></td>
            <td></td>
            <td>40%</td>
            <td>10%</td>
            <td></td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_P_gzh" title="9x18mm PM P gzh">
                9x18mm PM P gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>50</td>
            <td>5</td>
            <td>16</td>
            <td></td>
            <td></td>
            <td>25%</td>
            <td>10%</td>
            <td></td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_PSO_gzh" title="9x18mm PM PSO gzh">
                9x18mm PM PSO gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>54</td>
            <td>5</td>
            <td>13</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td></td>
            <td>35%</td>
            <td>10%</td>
            <td></td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_PS_gs_PPO" title="9x18mm PM PS gs PPO">
                9x18mm PM PS gs PPO
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>55</td>
            <td>6</td>
            <td>16</td>
            <td></td>
            <td></td>
            <td>25%</td>
            <td>15%</td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_PRS_gs" title="9x18mm PM PRS gs">
                9x18mm PM PRS gs
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>58</td>
            <td>6</td>
            <td>16</td>
            <td></td>
            <td></td>
            <td>30%</td>
            <td>15%</td>
            <td></td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_Ppe_gzh" title="9x18mm PM Ppe gzh">
                9x18mm PM Ppe gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>61</td>
            <td>7</td>
            <td>15</td>
            <td></td>
            <td></td>
            <td>35%</td>
            <td>15%</td>
            <td></td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_PPT_gzh" title="9x18mm PM PPT gzh">
                9x18mm PM PPT gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>59</td>
            <td>8</td>
            <td>22</td>
            <td>
              <font color="red">-5</font>
            </td>
            <td>
              <font color="green">-7</font>
            </td>
            <td>17%</td>
            <td>15%</td>
            <td></td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_Pst_gzh" title="9x18mm PM Pst gzh">
                9x18mm PM Pst gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>50</td>
            <td>12</td>
            <td>26</td>
            <td></td>
            <td></td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_RG028_gzh" title="9x18mm PM RG028 gzh">
                9x18mm PM RG028 gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>65</td>
            <td>13</td>
            <td>26</td>
            <td></td>
            <td></td>
            <td>2%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PM_BZhT_gzh" title="9x18mm PM BZhT gzh">
                9x18mm PM BZhT gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>53</td>
            <td>18</td>
            <td>28</td>
            <td></td>
            <td></td>
            <td>17%</td>
            <td>15%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x18mm_PMM_PstM_gzh" title="9x18mm PMM PstM gzh">
                9x18mm PMM PstM gzh
              </a>
            </td>
            <td>58</td>
            <td>24</td>
            <td>33</td>
            <td></td>
            <td>
              <font color="red">+5</font>
            </td>
            <td>17%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "solid 2px" }} rowspan="1">
              <a href="/wiki/9x18mm_PM_PBM_gzh" title="9x18mm PM PBM gzh">
                9x18mm PM PBM gzh
              </a>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>40</td>
            <td style={{ borderBottom: "solid 2px" }}>28</td>
            <td style={{ borderBottom: "solid 2px" }}>30</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+4</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>16%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#dd333380" }}>1</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#b3242580" }}>0</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr id="7.62x25mm_Tokarev_anchor">
            <td style={{ borderBottom: "solid 2px" }} rowspan="7">
              <a href="/wiki/7.62x25mm_Tokarev" title="7.62x25mm Tokarev">
                7.62x25mm Tokarev
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/7.62x25mm_TT_LRNPC" title="7.62x25mm TT LRNPC">
                7.62x25mm TT LRNPC
              </a>
            </td>
            <td>66</td>
            <td>7</td>
            <td>27</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="green">-10</font>
            </td>
            <td>35%</td>
            <td>15%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x25mm_TT_LRN" title="7.62x25mm TT LRN">
                7.62x25mm TT LRN
              </a>
            </td>
            <td>64</td>
            <td>8</td>
            <td>28</td>
            <td>
              <font color="green">+5</font>
            </td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>35%</td>
            <td>15%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x25mm_TT_FMJ43" title="7.62x25mm TT FMJ43">
                7.62x25mm TT FMJ43
              </a>
            </td>
            <td>60</td>
            <td>11</td>
            <td>29</td>
            <td></td>
            <td></td>
            <td>25%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x25mm_TT_AKBS" title="7.62x25mm TT AKBS">
                7.62x25mm TT AKBS
              </a>
            </td>
            <td>58</td>
            <td>12</td>
            <td>32</td>
            <td>
              <font color="green">+15</font>
            </td>
            <td>
              <font color="green">-15</font>
            </td>
            <td>25%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x25mm_TT_P_gl" title="7.62x25mm TT P gl">
                7.62x25mm TT P gl
              </a>
            </td>
            <td>58</td>
            <td>14</td>
            <td>32</td>
            <td></td>
            <td></td>
            <td>25%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x25mm_TT_PT_gzh" title="7.62x25mm TT PT gzh">
                7.62x25mm TT PT gzh
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>55</td>
            <td>18</td>
            <td>34</td>
            <td>
              <font color="red">-10</font>
            </td>
            <td></td>
            <td>17%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "solid 2px" }} rowspan="1">
              <a href="/wiki/7.62x25mm_TT_Pst_gzh" title="7.62x25mm TT Pst gzh">
                7.62x25mm TT Pst gzh
              </a>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>50</td>
            <td style={{ borderBottom: "solid 2px" }}>25</td>
            <td style={{ borderBottom: "solid 2px" }}>36</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>20%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#dd333380" }}>1</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#b3242580" }}>0</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr id="9x19mm_Parabellum_anchor">
            <td rowspan="8" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/9x19mm_Parabellum" title="9x19mm Parabellum">
                9x19mm Parabellum
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/9x19mm_RIP" title="9x19mm RIP">
                9x19mm RIP
              </a>
            </td>
            <td>102</td>
            <td>2</td>
            <td>11</td>
            <td></td>
            <td>
              <font color="red">+20</font>
            </td>
            <td>100%</td>
            <td>30%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x19mm_QuakeMaker" title="9x19mm QuakeMaker">
                9x19mm QuakeMaker
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>85</td>
            <td>8</td>
            <td>22</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>10%</td>
            <td>15%</td>
            <td>22%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x19mm_PSO_gzh" title="9x19mm PSO gzh">
                9x19mm PSO gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>59</td>
            <td>10</td>
            <td>32</td>
            <td></td>
            <td></td>
            <td>25%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x19mm_Luger_CCI" title="9x19mm Luger CCI">
                9x19mm Luger CCI
              </a>
            </td>
            <td>70</td>
            <td>10</td>
            <td>38</td>
            <td></td>
            <td></td>
            <td>25%</td>
            <td>20%</td>
            <td>20%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x19mm_T_gzh" title="9x19mm T gzh">
                9x19mm T gzh
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>58</td>
            <td>14</td>
            <td>33</td>
            <td>
              <font color="red">-5</font>
            </td>
            <td>
              <font color="green">-6</font>
            </td>
            <td>15%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x19mm_Pst_gzh" title="9x19mm Pst gzh">
                9x19mm Pst gzh
              </a>{" "}
              <s>
                <sup>
                  <i>
                    <b>FM</b>
                  </i>
                </sup>
              </s>
            </td>
            <td>54</td>
            <td>20</td>
            <td>33</td>
            <td></td>
            <td></td>
            <td>15%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x19mm_AP_6.3" title="9x19mm AP 6.3">
                9x19mm AP 6.3
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>52</td>
            <td>30</td>
            <td>48</td>
            <td></td>
            <td></td>
            <td>5%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/9x19mm_PBP_gzh" title="9x19mm PBP gzh">
                9x19mm PBP gzh
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>52</td>
            <td style={{ borderBottom: "solid 2px" }}>39</td>
            <td style={{ borderBottom: "solid 2px" }}>53</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="green">+5</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+15</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>5%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr id=".45_ACP_anchor">
            <td rowspan="5" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/.45_ACP" title=".45 ACP">
                .45 ACP
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/.45_ACP_RIP" title=".45 ACP RIP">
                .45 ACP RIP
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>137</td>
            <td>3</td>
            <td>12</td>
            <td>
              <font color="red">-5</font>
            </td>
            <td></td>
            <td>100%</td>
            <td>30%</td>
            <td>20%</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/.45_ACP_Hydra-Shok" title=".45 ACP Hydra-Shok">
                .45 ACP Hydra-Shok
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>105</td>
            <td>13</td>
            <td>30</td>
            <td></td>
            <td></td>
            <td>50%</td>
            <td></td>
            <td>30%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/.45_ACP_Lasermatch_FMJ" title=".45 ACP Lasermatch FMJ">
                .45 ACP Lasermatch FMJ
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>80</td>
            <td>19</td>
            <td>37</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td></td>
            <td>1%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/.45_ACP_Match_FMJ" title=".45 ACP Match FMJ">
                .45 ACP Match FMJ
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>76</td>
            <td>25</td>
            <td>36</td>
            <td></td>
            <td></td>
            <td>1%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/.45_ACP_AP" title=".45 ACP AP">
                .45 ACP AP
              </a>{" "}
              <b>
                <sup>
                  S{" "}
                  <i>
                    <s>FM</s>
                  </i>
                </sup>
              </b>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>70</td>
            <td style={{ borderBottom: "solid 2px" }}>38</td>
            <td style={{ borderBottom: "solid 2px" }}>48</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">-5</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+7</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>1%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#EB6C0D80" }}>2</td>
          </tr>
          <tr id="9x21mm_Gyurza_anchor">
            <td rowspan="4" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/9x21mm_Gyurza" title="9x21mm Gyurza">
                9x21mm Gyurza
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/9x21mm_PE_gzh" title="9x21mm PE gzh">
                9x21mm PE gzh
              </a>
            </td>
            <td>80</td>
            <td>15</td>
            <td>63</td>
            <td></td>
            <td></td>
            <td>35%</td>
            <td>15%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x21mm_P_gzh" title="9x21mm P gzh">
                9x21mm P gzh
              </a>
            </td>
            <td>65</td>
            <td>18</td>
            <td>44</td>
            <td></td>
            <td></td>
            <td>30%</td>
            <td>15%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x21mm_PS_gzh" title="9x21mm PS gzh">
                9x21mm PS gzh
              </a>
            </td>
            <td>49</td>
            <td>35</td>
            <td>46</td>
            <td></td>
            <td></td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/9x21mm_BT_gzh" title="9x21mm BT gzh">
                9x21mm BT gzh
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>63</td>
            <td style={{ borderBottom: "solid 2px" }}>39</td>
            <td style={{ borderBottom: "solid 2px" }}>47</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">-4</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="green">-4</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>20%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr id="5.7x28mm_FN_anchor">
            <td rowspan="7" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/5.7x28mm_FN" title="5.7x28mm FN">
                5.7x28mm FN
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/5.7x28mm_R37.F" title="5.7x28mm R37.F">
                5.7x28mm R37.F
              </a>
            </td>
            <td>98</td>
            <td>8</td>
            <td>7</td>
            <td></td>
            <td></td>
            <td>100%</td>
            <td>15%</td>
            <td>15%</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.7x28mm_SS198LF" title="5.7x28mm SS198LF">
                5.7x28mm SS198LF
              </a>
            </td>
            <td>74</td>
            <td>10</td>
            <td>15</td>
            <td></td>
            <td></td>
            <td>80%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.7x28mm_R37.X" title="5.7x28mm R37.X">
                5.7x28mm R37.X
              </a>
            </td>
            <td>81</td>
            <td>11</td>
            <td>14</td>
            <td></td>
            <td></td>
            <td>70%</td>
            <td>10%</td>
            <td>20%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.7x28mm_SS197SR" title="5.7x28mm SS197SR">
                5.7x28mm SS197SR
              </a>
            </td>
            <td>62</td>
            <td>20</td>
            <td>22</td>
            <td></td>
            <td></td>
            <td>50%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.7x28mm_L191" title="5.7x28mm L191">
                5.7x28mm L191
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>58</td>
            <td>33</td>
            <td>41</td>
            <td>
              <font color="red">-4</font>
            </td>
            <td></td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.7x28mm_SB193" title="5.7x28mm SB193">
                5.7x28mm SB193
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>54</td>
            <td>35</td>
            <td>37</td>
            <td>
              <font color="green">+5</font>
            </td>
            <td>
              <font color="green">-24</font>
            </td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/5.7x28mm_SS190" title="5.7x28mm SS190">
                5.7x28mm SS190
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>49</td>
            <td style={{ borderBottom: "solid 2px" }}>37</td>
            <td style={{ borderBottom: "solid 2px" }}>43</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>20%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr id="4.6x30mm_HK_anchor">
            <td rowspan="4" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/4.6x30mm_HK" title="4.6x30mm HK">
                4.6x30mm HK
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/4.6x30mm_Action_SX" title="4.6x30mm Action SX">
                4.6x30mm Action SX
              </a>
            </td>
            <td>65</td>
            <td>18</td>
            <td>39</td>
            <td></td>
            <td></td>
            <td>50%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/4.6x30mm_Subsonic_SX" title="4.6x30mm Subsonic SX">
                4.6x30mm Subsonic SX
              </a>{" "}
              <b>
                <sup>
                  S{" "}
                  <i>
                    <s>FM</s>
                  </i>
                </sup>
              </b>
            </td>
            <td>45</td>
            <td>36</td>
            <td>46</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="green">-22</font>
            </td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/4.6x30mm_FMJ_SX" title="4.6x30mm FMJ SX">
                4.6x30mm FMJ SX
              </a>
            </td>
            <td>43</td>
            <td>40</td>
            <td>41</td>
            <td></td>
            <td></td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/4.6x30mm_AP_SX" title="4.6x30mm AP SX">
                4.6x30mm AP SX
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>35</td>
            <td style={{ borderBottom: "solid 2px" }}>53</td>
            <td style={{ borderBottom: "solid 2px" }}>46</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+10</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>10%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr id="9x39mm_anchor">
            <td rowspan="5" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/9x39mm" title="9x39mm">
                9x39mm
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/9x39mm_SP-5_gs" title="9x39mm SP-5 gs">
                9x39mm SP-5 gs
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>68</td>
            <td>38</td>
            <td>52</td>
            <td></td>
            <td></td>
            <td>20%</td>
            <td></td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x39mm_SP-6_gs" title="9x39mm SP-6 gs">
                9x39mm SP-6 gs
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>58</td>
            <td>46</td>
            <td>60</td>
            <td></td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>10%</td>
            <td>10%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x39mm_PAB-9_gs" title="9x39mm PAB-9 gs">
                9x39mm PAB-9 gs
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>62</td>
            <td>48</td>
            <td>72</td>
            <td>
              <font color="red">-15</font>
            </td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>10%</td>
            <td>0%</td>
            <td>0%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/9x39mm_SPP_gs" title="9x39mm SPP gs">
                9x39mm SPP gs
              </a>{" "}
              <b>
                <sup>
                  S{" "}
                  <i>
                    <s>FM</s>
                  </i>
                </sup>
              </b>
            </td>
            <td>64</td>
            <td>50</td>
            <td>56</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="red">+20</font>
            </td>
            <td>20%</td>
            <td>10%</td>
            <td>20%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/9x39mm_BP_gs" title="9x39mm BP gs">
                9x39mm BP gs
              </a>{" "}
              <b>
                <sup>
                  S{" "}
                  <i>
                    <s>FM</s>
                  </i>
                </sup>
              </b>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>60</td>
            <td style={{ borderBottom: "solid 2px" }}>55</td>
            <td style={{ borderBottom: "solid 2px" }}>68</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="green">+10</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+22</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>10%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr id=".366_TKM_anchor">
            <td rowspan="4" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/.366_TKM" title=".366 TKM">
                .366 TKM
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/.366_TKM_Geksa" title=".366 TKM Geksa">
                .366 TKM Geksa
              </a>
            </td>
            <td>110</td>
            <td>14</td>
            <td>38</td>
            <td></td>
            <td></td>
            <td>45%</td>
            <td>30%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>

          <tr>
            <td rowspan="1">
              <a href="/wiki/.366_TKM_FMJ" title=".366 TKM FMJ">
                .366 TKM FMJ
              </a>
            </td>
            <td>98</td>
            <td>23</td>
            <td>48</td>
            <td></td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>25%</td>
            <td>20%</td>
            <td>25%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/.366_TKM_EKO" title=".366 TKM EKO">
                .366 TKM EKO
              </a>
            </td>
            <td>73</td>
            <td>30</td>
            <td>40</td>
            <td>
              <font color="red">-10</font>
            </td>
            <td>
              <font color="green">-15</font>
            </td>
            <td>20%</td>
            <td></td>
            <td>20%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/.366_TKM_AP-M" title=".366 TKM AP-M">
                .366 TKM AP-M
              </a>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>90</td>
            <td style={{ borderBottom: "solid 2px" }}>42</td>
            <td style={{ borderBottom: "solid 2px" }}>60</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">-28</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+35</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>1%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>10%</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
          </tr>
          <tr id="5.45x39mm_anchor">
            <td rowspan="13" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/5.45x39mm" title="5.45x39mm">
                5.45x39mm
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_SP" title="5.45x39mm SP">
                5.45x39mm SP
              </a>
            </td>
            <td>68</td>
            <td>11</td>
            <td>34</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="green">-15</font>
            </td>
            <td>45%</td>
            <td>10%</td>
            <td>10%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_HP" title="5.45x39mm HP">
                5.45x39mm HP
              </a>
            </td>
            <td>74</td>
            <td>11</td>
            <td>20</td>
            <td></td>
            <td>
              <font color="red">+5</font>
            </td>
            <td>35%</td>
            <td>15%</td>
            <td>15%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_PRS_gs" title="5.45x39mm PRS gs">
                5.45x39mm PRS gs
              </a>
            </td>
            <td>60</td>
            <td>14</td>
            <td>28</td>
            <td></td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>30%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_US_gs" title="5.45x39mm US gs">
                5.45x39mm US gs
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>65</td>
            <td>15</td>
            <td>34</td>
            <td></td>
            <td>
              <font color="green">-25</font>
            </td>
            <td>10%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_FMJ" title="5.45x39mm FMJ">
                5.45x39mm FMJ
              </a>
            </td>
            <td>56</td>
            <td>21</td>
            <td>30</td>
            <td></td>
            <td></td>
            <td>25%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_T_gs" title="5.45x39mm T gs">
                5.45x39mm T gs
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>57</td>
            <td>20</td>
            <td>38</td>
            <td>
              <font color="red">-5</font>
            </td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>16%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_PS_gs" title="5.45x39mm PS gs">
                5.45x39mm PS gs
              </a>
            </td>
            <td>50</td>
            <td>27</td>
            <td>35</td>
            <td></td>
            <td></td>
            <td>40%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_PP_gs" title="5.45x39mm PP gs">
                5.45x39mm PP gs
              </a>
            </td>
            <td>48</td>
            <td>33</td>
            <td>32</td>
            <td></td>
            <td></td>
            <td>17%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_BP_gs" title="5.45x39mm BP gs">
                5.45x39mm BP gs
              </a>
            </td>
            <td>49</td>
            <td>35</td>
            <td>41</td>
            <td></td>
            <td></td>
            <td>16%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_BT_gs" title="5.45x39mm BT gs">
                5.45x39mm BT gs
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>44</td>
            <td>37</td>
            <td>49</td>
            <td>
              <font color="red">-2</font>
            </td>
            <td>
              <font color="red">+3</font>
            </td>
            <td>16%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td>
              <a href="/wiki/5.45x39mm_7N40" title="5.45x39mm 7N40">
                5.45x39mm 7N40
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>52</td>
            <td>44</td>
            <td>50</td>
            <td>
              <font color="green">+50</font>
            </td>
            <td>
              <font color="green">-20</font>
            </td>
            <td>2%</td>
            <td>20%</td>
            <td>15%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.45x39mm_BS_gs" title="5.45x39mm BS gs">
                5.45x39mm BS gs
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>40</td>
            <td>51</td>
            <td>57</td>
            <td>
              <font color="red">-3</font>
            </td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>17%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/5.45x39mm_PPBS_gs_%22Igolnik%22" title='5.45x39mm PPBS gs "Igolnik"'>
                5.45x39mm PPBS gs "Igolnik"
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>37</td>
            <td style={{ borderBottom: "solid 2px" }}>62</td>
            <td style={{ borderBottom: "solid 2px" }}>60</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+15</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>2%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
          </tr>
          <tr id="5.56x45mm_NATO_anchor">
            <td rowspan="11" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/5.56x45mm_NATO" title="5.56x45mm NATO">
                5.56x45mm NATO
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_Warmageddon" title="5.56x45mm Warmageddon">
                5.56x45mm Warmageddon
              </a>
            </td>
            <td>85</td>
            <td>3</td>
            <td>14</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>90%</td>
            <td>20%</td>
            <td>20%</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_HP" title="5.56x45mm HP">
                5.56x45mm HP
              </a>
            </td>
            <td>75</td>
            <td>9</td>
            <td>22</td>
            <td></td>
            <td></td>
            <td>70%</td>
            <td>15%</td>
            <td>15%</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_MK_255_Mod_0_(RRLP)" title="5.56x45mm MK 255 Mod 0 (RRLP)">
                5.56x45mm MK 255 Mod 0 (RRLP)
              </a>
            </td>
            <td>60</td>
            <td>17</td>
            <td>32</td>
            <td></td>
            <td></td>
            <td>3%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_MK_318_Mod_0_(SOST)" title="5.56x45mm MK 318 Mod 0 (SOST)">
                5.56x45mm MK 318 Mod 0 (SOST)
              </a>
            </td>
            <td>67</td>
            <td>20</td>
            <td>35</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td></td>
            <td>15%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_M856" title="5.56x45mm M856">
                5.56x45mm M856
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>55</td>
            <td>23</td>
            <td>34</td>
            <td>
              <font color="red">-2</font>
            </td>
            <td>
              <font color="green">-2</font>
            </td>
            <td>33%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_FMJ" title="5.56x45mm FMJ">
                5.56x45mm FMJ
              </a>
            </td>
            <td>52</td>
            <td>24</td>
            <td>33</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>50%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_M855" title="5.56x45mm M855">
                5.56x45mm M855
              </a>
            </td>
            <td>50</td>
            <td>28</td>
            <td>37</td>
            <td>
              <font color="red">-5</font>
            </td>
            <td></td>
            <td>40%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_M856A1" title="5.56x45mm M856A1">
                5.56x45mm M856A1
              </a>{" "}
              <b>
                <sup>
                  T{" "}
                  <i>
                    <s>FM</s>
                  </i>
                </sup>
              </b>
            </td>
            <td>51</td>
            <td>37</td>
            <td>52</td>
            <td>
              <font color="red">-1</font>
            </td>
            <td>
              <font color="red">+4</font>
            </td>
            <td>33%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_M855A1" title="5.56x45mm M855A1">
                5.56x45mm M855A1
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>46</td>
            <td>45</td>
            <td>52</td>
            <td>
              <font color="red">-10</font>
            </td>
            <td>
              <font color="red">+5</font>
            </td>
            <td>34%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/5.56x45mm_M995" title="5.56x45mm M995">
                5.56x45mm M995
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>40</td>
            <td>53</td>
            <td>58</td>
            <td></td>
            <td>
              <font color="red">+8</font>
            </td>
            <td>32%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/5.56x45mm_SSA_AP" title="5.56x45mm SSA AP">
                5.56x45mm SSA AP
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>36</td>
            <td style={{ borderBottom: "solid 2px" }}>56</td>
            <td style={{ borderBottom: "solid 2px" }}>64</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">-6</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+6</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>20%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="5" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/.300_Blackout" title=".300 Blackout">
                .300 Blackout
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/.300_Blackout_Whisper" title=".300 Blackout Whisper">
                .300 Blackout Whisper
              </a>
            </td>
            <td>90</td>
            <td>14</td>
            <td>19</td>
            <td>
              <font color="green">+5</font>
            </td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>35%</td>
            <td></td>
            <td>
              <font color="green">+20%</font>
            </td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/.300_Blackout_V-Max" title=".300 Blackout V-Max">
                .300 Blackout V-Max
              </a>
            </td>
            <td>72</td>
            <td>20</td>
            <td>25</td>
            <td>
              <font color="green">+30</font>
            </td>
            <td>
              <font color="green">-10</font>
            </td>
            <td>25%</td>
            <td>
              <font color="green">+22%</font>
            </td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr id=".300_Blackout_anchor">
            <td rowspan="1">
              <a href="/wiki/.300_AAC_Blackout_BCP_FMJ" title=".300 AAC Blackout BCP FMJ">
                .300 AAC Blackout BCP FMJ
              </a>
            </td>
            <td>60</td>
            <td>29</td>
            <td>36</td>
            <td></td>
            <td></td>
            <td>30%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/.300_Blackout_M62_Tracer" title=".300 Blackout M62 Tracer">
                .300 Blackout M62 Tracer
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>54</td>
            <td>34</td>
            <td>40</td>
            <td></td>
            <td>
              <font color="red">+5</font>
            </td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/.300_AAC_Blackout_AP" title=".300 AAC Blackout AP">
                .300 AAC Blackout AP
              </a>{" "}
              <sup>
                <s>
                  <i>
                    <b>FM</b>
                  </i>
                </s>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>51</td>
            <td style={{ borderBottom: "solid 2px" }}>45</td>
            <td style={{ borderBottom: "solid 2px" }}>65</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+10</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>30%</td>
            <td style={{ borderBottom: "solid 2px" }}>15%</td>
            <td style={{ borderBottom: "solid 2px" }}>15%</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
          </tr>
          <tr id="7.62x39mm_anchor">
            <td rowspan="6" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/7.62x39mm" title="7.62x39mm">
                7.62x39mm
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/7.62x39mm_HP" title="7.62x39mm HP">
                7.62x39mm HP
              </a>
            </td>
            <td>87</td>
            <td>15</td>
            <td>35</td>
            <td>
              <font color="red">-5</font>
            </td>
            <td></td>
            <td>26%</td>
            <td>15%</td>
            <td>15%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x39mm_US_gzh" title="7.62x39mm US gzh">
                7.62x39mm US gzh
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>56</td>
            <td>29</td>
            <td>42</td>
            <td>
              <font color="green">+5</font>
            </td>
            <td>
              <font color="green">-30</font>
            </td>
            <td>8%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x39mm_T-45M1_gzh" title="7.62x39mm T-45M1 gzh">
                7.62x39mm T-45M1 gzh
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>62</td>
            <td>30</td>
            <td>46</td>
            <td>
              <font color="red">-4</font>
            </td>
            <td>
              <font color="green">-6</font>
            </td>
            <td>12%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x39mm_PS_gzh" title="7.62x39mm PS gzh">
                7.62x39mm PS gzh
              </a>
            </td>
            <td>57</td>
            <td>32</td>
            <td>52</td>
            <td></td>
            <td></td>
            <td>25%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x39mm_BP_gzh" title="7.62x39mm BP gzh">
                7.62x39mm BP gzh
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>58</td>
            <td>47</td>
            <td>63</td>
            <td>
              <font color="red">-3</font>
            </td>
            <td>
              <font color="red">+5</font>
            </td>
            <td>12%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/7.62x39mm_MAI_AP" title="7.62x39mm MAI AP">
                7.62x39mm MAI AP
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>46</td>
            <td style={{ borderBottom: "solid 2px" }}>58</td>
            <td style={{ borderBottom: "solid 2px" }}>76</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">-5</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+10</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>5%</td>
            <td style={{ borderBottom: "solid 2px" }}>10%</td>
            <td style={{ borderBottom: "solid 2px" }}>10%</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr id="7.62x51mm_NATO_anchor">
            <td rowspan="7" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/7.62x51mm_NATO" title="7.62x51mm NATO">
                7.62x51mm NATO
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/7.62x51mm_Ultra_Nosler" title="7.62x51mm Ultra Nosler">
                7.62x51mm Ultra Nosler
              </a>
            </td>
            <td>107</td>
            <td>15</td>
            <td>20</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>70%</td>
            <td>20%</td>
            <td>20%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x51mm_BCP_FMJ" title="7.62x51mm BCP FMJ">
                7.62x51mm BCP FMJ
              </a>
            </td>
            <td>88</td>
            <td>31</td>
            <td>33</td>
            <td></td>
            <td>
              <font color="green">-3</font>
            </td>
            <td>25%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x51mm_TCW_SP" title="7.62x51mm TCW SP">
                7.62x51mm TCW SP
              </a>
            </td>
            <td>60</td>
            <td>36</td>
            <td>40</td>
            <td>
              <font color="red">-8</font>
            </td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>20%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x51mm_M80" title="7.62x51mm M80">
                7.62x51mm M80
              </a>
            </td>
            <td>80</td>
            <td>41</td>
            <td>66</td>
            <td></td>
            <td></td>
            <td>17%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x51mm_M62_Tracer" title="7.62x51mm M62 Tracer">
                7.62x51mm M62 Tracer
              </a>{" "}
              <b>
                <sup>
                  T{" "}
                  <i>
                    <s>FM</s>
                  </i>
                </sup>
              </b>
            </td>
            <td>79</td>
            <td>44</td>
            <td>75</td>
            <td>
              <font color="red">-6</font>
            </td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>14%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x51mm_M61" title="7.62x51mm M61">
                7.62x51mm M61
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>70</td>
            <td>64</td>
            <td>83</td>
            <td>
              <font color="green">+3</font>
            </td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>13%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/7.62x51mm_M993" title="7.62x51mm M993">
                7.62x51mm M993
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>67</td>
            <td style={{ borderBottom: "solid 2px" }}>70</td>
            <td style={{ borderBottom: "solid 2px" }}>85</td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="green">+3</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+8</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>13%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
          </tr>
          <tr id="7.62x54mmR_anchor">
            <td rowspan="6" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/7.62x54mmR" title="7.62x54mmR">
                7.62x54mmR
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/7.62x54mm_R_T-46M_gzh" title="7.62x54mm R T-46M gzh">
                7.62x54mm R T-46M gzh
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>82</td>
            <td>41</td>
            <td>83</td>
            <td>
              <font color="red">-1</font>
            </td>
            <td>
              <font color="green">-5</font>
            </td>
            <td>18%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x54mm_R_LPS_gzh" title="7.62x54mm R LPS gzh">
                7.62x54mm R LPS gzh
              </a>
            </td>
            <td>81</td>
            <td>42</td>
            <td>78</td>
            <td></td>
            <td></td>
            <td>18%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x54mm_R_PS_gzh" title="7.62x54mm R PS gzh">
                7.62x54mm R PS gzh
              </a>
            </td>
            <td>86</td>
            <td>45</td>
            <td>84</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="red">+8</font>
            </td>
            <td>8%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x54mm_R_BT_gzh" title="7.62x54mm R BT gzh">
                7.62x54mm R BT gzh
              </a>{" "}
              <b>
                <sup>
                  T{" "}
                  <i>
                    <s>FM</s>
                  </i>
                </sup>
              </b>
            </td>
            <td>78</td>
            <td>59</td>
            <td>87</td>
            <td>
              <font color="red">-2</font>
            </td>
            <td>
              <font color="green">-4</font>
            </td>
            <td>8%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/7.62x54mm_R_SNB_gzh" title="7.62x54mm R SNB gzh">
                7.62x54mm R SNB gzh
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>75</td>
            <td>62</td>
            <td>87</td>
            <td></td>
            <td>
              <font color="red">+10</font>
            </td>
            <td>8%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/7.62x54mm_R_BS_gs" title="7.62x54mm R BS gs">
                7.62x54mm R BS gs
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>72</td>
            <td style={{ borderBottom: "solid 2px" }}>70</td>
            <td style={{ borderBottom: "solid 2px" }}>88</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>8%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
          </tr>
          <tr id=".338_Lapua_Magnum_anchor">
            <td rowspan="4" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/.338_Lapua_Magnum" title=".338 Lapua Magnum">
                .338 Lapua Magnum
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/.338_Lapua_Magnum_TAC-X" title=".338 Lapua Magnum TAC-X">
                .338 Lapua Magnum TAC-X
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>196</td>
            <td>18</td>
            <td>55</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td>
              <font color="red">+5</font>
            </td>
            <td>50%</td>
            <td>80%</td>
            <td>50%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#ac660080" }}>3</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/.338_Lapua_Magnum_UCW" title=".338 Lapua Magnum UCW">
                .338 Lapua Magnum UCW
              </a>
            </td>
            <td>142</td>
            <td>32</td>
            <td>70</td>
            <td>
              <font color="red">-5</font>
            </td>
            <td></td>
            <td>60%</td>
            <td>50%</td>
            <td>40%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#FB9C0E80" }}>4</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/.338_Lapua_Magnum_FMJ" title=".338 Lapua Magnum FMJ">
                .338 Lapua Magnum FMJ
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td>122</td>
            <td>47</td>
            <td>83</td>
            <td></td>
            <td></td>
            <td>20%</td>
            <td>35%</td>
            <td>50%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/.338_Lapua_Magnum_AP" title=".338 Lapua Magnum AP">
                .338 Lapua Magnum AP
              </a>{" "}
              <sup>
                <i>
                  <b>
                    <s>FM</s>
                  </b>
                </i>
              </sup>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>115</td>
            <td style={{ borderBottom: "solid 2px" }}>79</td>
            <td style={{ borderBottom: "solid 2px" }}>89</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+10</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>13%</td>
            <td style={{ borderBottom: "solid 2px" }}>20%</td>
            <td style={{ borderBottom: "solid 2px" }}>55%</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
          </tr>
          <tr id="12.7x55mm_STs-130_anchor">
            <td rowspan="3" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/12.7x55mm_STs-130" title="12.7x55mm STs-130">
                12.7x55mm STs-130
              </a>
            </td>
            <td rowspan="1">
              <a href="/wiki/12.7x55_mm_PS12A" title="12.7x55 mm PS12A">
                12.7x55 mm PS12A
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>165</td>
            <td>10</td>
            <td>22</td>
            <td>
              <font color="red">-15</font>
            </td>
            <td>
              <font color="green">-12</font>
            </td>
            <td>70%</td>
            <td>35%</td>
            <td>30%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12.7x55_mm_PS12" title="12.7x55 mm PS12">
                12.7x55 mm PS12
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td>115</td>
            <td>28</td>
            <td>60</td>
            <td>
              <font color="green">+10</font>
            </td>
            <td></td>
            <td>30%</td>
            <td>30%</td>
            <td>20%</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00640080" }}>5</td>
            <td style={{ backgroundColor: "#EB6C0D80" }}>2</td>
            <td style={{ backgroundColor: "#dd333380" }}>1</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1" style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/12.7x55_mm_PS12B" title="12.7x55 mm PS12B">
                12.7x55 mm PS12B
              </a>{" "}
              <b>
                <sup>S</sup>
              </b>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>102</td>
            <td style={{ borderBottom: "solid 2px" }}>46</td>
            <td style={{ borderBottom: "solid 2px" }}>57</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>
              <font color="red">+15</font>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>30%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>15%</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00990080" }}>6</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#fb9c0e80" }}>4</td>
          </tr>
          <tr id="40x46mm_anchor">
            <td style={{ borderBottom: "solid 2px" }}>
              <a href="/wiki/40x46_mm" title="40x46 mm">
                40x46 mm
              </a>
            </td>
            <td style={{ borderBottom: "solid 2px" }}>
              <a
                href="/wiki/40x46mm_M576_(MP-APERS)_grenade"
                title="40x46mm M576 (MP-APERS) grenade"
              >
                40x46mm M576 (MP-APERS) grenade
              </a>
              **
            </td>
            <td style={{ borderBottom: "solid 2px" }} data-sort-value="2400">
              15x160
            </td>
            <td style={{ borderBottom: "solid 2px" }}>5</td>
            <td style={{ borderBottom: "solid 2px" }}>95</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}>0%</td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px" }}></td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#00640080" }}>5</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
            <td style={{ borderBottom: "solid 2px", backgroundColor: "#ac660080" }}>3</td>
          </tr>
          <tr id="Stationary_Weapons_anchor">
            <td rowspan="3">
              Stationary
              <p>Weapons</p>
            </td>
            <td rowspan="1">
              <a href="/wiki/30x29_mm_VOG-30" title="30x29 mm VOG-30">
                30x29 mm VOG-30
              </a>
              ***
            </td>
            <td>199</td>
            <td>1</td>
            <td>95</td>
            <td></td>
            <td></td>
            <td>0%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
            <td style={{ backgroundColor: "#b3242580" }}>0</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12.7x108_mm_B-32_gl" title="12.7x108 mm B-32 gl">
                12.7x108 mm B-32 gl
              </a>
            </td>
            <td>182</td>
            <td>88</td>
            <td>88</td>
            <td></td>
            <td></td>
            <td>17%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
          </tr>
          <tr>
            <td rowspan="1">
              <a href="/wiki/12.7x108_mm_BZT-44M_gzh" title="12.7x108 mm BZT-44M gzh">
                12.7x108 mm BZT-44M gzh
              </a>{" "}
              <b>
                <sup>T</sup>
              </b>
            </td>
            <td>199</td>
            <td>80</td>
            <td>95</td>
            <td></td>
            <td></td>
            <td>17%</td>
            <td></td>
            <td></td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
            <td style={{ backgroundColor: "#00990080" }}>6</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default AmmoChartManual;
