import { useState, useCallback } from "react";
import ChiTitThnhVin from "../components/ChiTitThnhVin";
import PortalPopup from "../components/PortalPopup";
import Notification1 from "../components/Notification1";
import { useNavigate } from "react-router-dom";
import styles from "./QunLHThngQunLNh.module.css";

const QunLHThngQunLNh = () => {
  const [isChiTitThnhVinOpen, setChiTitThnhVinOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isChiTitThnhVin1Open, setChiTitThnhVin1Open] = useState(false);
  const [isNotification1Open, setNotification1Open] = useState(false);
  const [isChiTitThnhVin2Open, setChiTitThnhVin2Open] = useState(false);
  const [isNotification2Open, setNotification2Open] = useState(false);
  const [isChiTitThnhVin3Open, setChiTitThnhVin3Open] = useState(false);
  const [isNotification3Open, setNotification3Open] = useState(false);
  const [isChiTitThnhVin4Open, setChiTitThnhVin4Open] = useState(false);
  const [isNotification4Open, setNotification4Open] = useState(false);
  const [isChiTitThnhVin5Open, setChiTitThnhVin5Open] = useState(false);
  const [isNotification5Open, setNotification5Open] = useState(false);
  const [isChiTitThnhVin6Open, setChiTitThnhVin6Open] = useState(false);
  const [isNotification6Open, setNotification6Open] = useState(false);
  const [isChiTitThnhVin7Open, setChiTitThnhVin7Open] = useState(false);
  const [isNotification7Open, setNotification7Open] = useState(false);
  const navigate = useNavigate();

  const openChiTitThnhVin = useCallback(() => {
    setChiTitThnhVinOpen(true);
  }, []);

  const closeChiTitThnhVin = useCallback(() => {
    setChiTitThnhVinOpen(false);
  }, []);

  const openNotification = useCallback(() => {
    setNotificationOpen(true);
  }, []);

  const closeNotification = useCallback(() => {
    setNotificationOpen(false);
  }, []);

  const openChiTitThnhVin1 = useCallback(() => {
    setChiTitThnhVin1Open(true);
  }, []);

  const closeChiTitThnhVin1 = useCallback(() => {
    setChiTitThnhVin1Open(false);
  }, []);

  const openNotification1 = useCallback(() => {
    setNotification1Open(true);
  }, []);

  const closeNotification1 = useCallback(() => {
    setNotification1Open(false);
  }, []);

  const openChiTitThnhVin2 = useCallback(() => {
    setChiTitThnhVin2Open(true);
  }, []);

  const closeChiTitThnhVin2 = useCallback(() => {
    setChiTitThnhVin2Open(false);
  }, []);

  const openNotification2 = useCallback(() => {
    setNotification2Open(true);
  }, []);

  const closeNotification2 = useCallback(() => {
    setNotification2Open(false);
  }, []);

  const openChiTitThnhVin3 = useCallback(() => {
    setChiTitThnhVin3Open(true);
  }, []);

  const closeChiTitThnhVin3 = useCallback(() => {
    setChiTitThnhVin3Open(false);
  }, []);

  const openNotification3 = useCallback(() => {
    setNotification3Open(true);
  }, []);

  const closeNotification3 = useCallback(() => {
    setNotification3Open(false);
  }, []);

  const openChiTitThnhVin4 = useCallback(() => {
    setChiTitThnhVin4Open(true);
  }, []);

  const closeChiTitThnhVin4 = useCallback(() => {
    setChiTitThnhVin4Open(false);
  }, []);

  const openNotification4 = useCallback(() => {
    setNotification4Open(true);
  }, []);

  const closeNotification4 = useCallback(() => {
    setNotification4Open(false);
  }, []);

  const openChiTitThnhVin5 = useCallback(() => {
    setChiTitThnhVin5Open(true);
  }, []);

  const closeChiTitThnhVin5 = useCallback(() => {
    setChiTitThnhVin5Open(false);
  }, []);

  const openNotification5 = useCallback(() => {
    setNotification5Open(true);
  }, []);

  const closeNotification5 = useCallback(() => {
    setNotification5Open(false);
  }, []);

  const openChiTitThnhVin6 = useCallback(() => {
    setChiTitThnhVin6Open(true);
  }, []);

  const closeChiTitThnhVin6 = useCallback(() => {
    setChiTitThnhVin6Open(false);
  }, []);

  const openNotification6 = useCallback(() => {
    setNotification6Open(true);
  }, []);

  const closeNotification6 = useCallback(() => {
    setNotification6Open(false);
  }, []);

  const openChiTitThnhVin7 = useCallback(() => {
    setChiTitThnhVin7Open(true);
  }, []);

  const closeChiTitThnhVin7 = useCallback(() => {
    setChiTitThnhVin7Open(false);
  }, []);

  const openNotification7 = useCallback(() => {
    setNotification7Open(true);
  }, []);

  const closeNotification7 = useCallback(() => {
    setNotification7Open(false);
  }, []);

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  const onMennuContainerClick = useCallback(() => {
    // Please sync "Quản lý hệ thống / Quản lý đơn vị_phòng ban (Card)" to the project
  }, []);

  const onMennuContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.qunLHThngQunLNh}>
        <div className={styles.qunLHThngQunLNhInner}>
          <div className={styles.frameParent}>
            <div className={styles.headerParent}>
              <div className={styles.header}>
                <div className={styles.flow1Parent}>
                  <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
                  <div className={styles.avt}>
                    <div className={styles.userpic} />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>
                      Quản lý nhóm người dùng
                    </div>
                    <div className={styles.employees}>Mã đơn vị: 123355555</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.memberParent}>
                    <div className={styles.member}>
                      <div className={styles.avt1}>
                        <div className={styles.userpic1} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>KA</div>
                      </div>
                      <div className={styles.avt2}>
                        <div className={styles.userpic2} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>NH</div>
                      </div>
                      <div className={styles.avt3}>
                        <div className={styles.userpic3} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>HN</div>
                      </div>
                      <div className={styles.avt4}>
                        <img
                          className={styles.ovalCopy3}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.wrapper}>
                          <div className={styles.div}>+3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.input}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                          <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleInputChange}
                          />
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.uplusWrapper}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus.svg"
                    />
                  </div>
                  <div className={styles.memberParent}>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucommentdots.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/unotifiacation.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.unsplashfgUd73uZmWrapper}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon}
                        alt=""
                        src="/unsplashfg-ud73u-zm@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.inputWrapper}>
                    <div className={styles.input1}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                        <input
                         type="text"
                         placeholder="Tìm thành viên..."
                         value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.departmentOverviewParent}>
              <div className={styles.departmentOverview}>
                <div className={styles.teamParent}>
                  <div className={styles.team}>
                    <img className={styles.downIcon} alt="" src="/down.svg" />
                    <div className={styles.workflowyParent}>
                      <img
                        className={styles.workflowyIcon}
                        alt=""
                        src="/workflowy.svg"
                      />
                      <div className={styles.headerParent}>
                        <div className={styles.seboStudio}>Nhóm E-Work</div>
                        <div className={styles.seboStudio1}>
                          Phòng phát triển phần mềm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listItem}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.listItem1}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.departmentProjectParent}>
                    <div className={styles.departmentProject}>
                      <div className={styles.workList}>
                        <div className={styles.listItem2}>
                          <img
                            className={styles.uangleDownIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.taskTitle}>
                            <div className={styles.team}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.progressParent}>
                                <img
                                  className={styles.usearchIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <img
                                  className={styles.downVectorIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  Thiết kế giao diện Dashboard và Todo list
                                </div>
                              </div>
                            </div>
                            <div className={styles.tasknameParent}>
                              <div className={styles.taskname1}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                              <div className={styles.taskname3}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.assignees}>
                            <div className={styles.avt5}>
                              <div className={styles.userpic4} />
                              <div className={styles.state4} />
                              <div className={styles.label4}>NA</div>
                            </div>
                            <div className={styles.tngAnh}>Nguyễn Mai Anh</div>
                          </div>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.dueDate}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>20/02/2022</div>
                          </div>
                          <div className={styles.tag}>
                            <div className={styles.div}>Mới được giao</div>
                          </div>
                          <div className={styles.works}>
                            <img
                              className={styles.userverAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>3</div>
                          </div>
                          <div className={styles.projectState}>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> đang xử lý</span>
                              </div>
                            </div>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> quá hạn</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.celldepartment}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.div}>Marketing</div>
                          </div>
                        </div>
                        <div className={styles.inputWrapper}>
                          <div className={styles.listItem3}>
                            <img
                              className={styles.uangleDownIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskTitle}>
                              <div className={styles.team}>
                                <img
                                  className={styles.frameChild}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.progressParent}>
                                  <img
                                    className={styles.usearchIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <img
                                    className={styles.downVectorIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.taskname}>
                                    Thiết kế giao diện Dashboard và Todo list
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tasknameParent}>
                                <div className={styles.taskname1}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                                <div className={styles.taskname3}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.assignees1}>
                              <div className={styles.avt5}>
                                <div className={styles.userpic4} />
                                <div className={styles.state4} />
                                <div className={styles.label4}>KA</div>
                              </div>
                              <div className={styles.tngAnh}>Tùng Anh</div>
                            </div>
                            <img
                              className={styles.priorityIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.dueDate}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>20/02/2022</div>
                            </div>
                            <div className={styles.tag1}>
                              <div className={styles.tagsdefault}>
                                <div className={styles.qlda}>E-Work</div>
                              </div>
                              <div className={styles.tagsdefault1}>
                                <div className={styles.qlda}>Lixil</div>
                              </div>
                              <div className={styles.tagsdefault2}>
                                <div className={styles.qlda}>Mobishop</div>
                              </div>
                            </div>
                            <div className={styles.works}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>3</div>
                            </div>
                            <div className={styles.projectState}>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> đang xử lý</span>
                                </div>
                              </div>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> quá hạn</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.action}>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.celldepartment}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.div}>Marketing</div>
                            </div>
                          </div>
                          <div className={styles.listItem4}>
                            <div className={styles.action2}>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueye.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openChiTitThnhVin}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueditalt2.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openNotification}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/utrash.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workList}>
                        <div className={styles.listItem2}>
                          <img
                            className={styles.uangleDownIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.taskTitle}>
                            <div className={styles.team}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.progressParent}>
                                <img
                                  className={styles.usearchIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <img
                                  className={styles.downVectorIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  Thiết kế giao diện Dashboard và Todo list
                                </div>
                              </div>
                            </div>
                            <div className={styles.tasknameParent}>
                              <div className={styles.taskname1}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                              <div className={styles.taskname3}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.assignees}>
                            <div className={styles.avt5}>
                              <div className={styles.userpic6} />
                              <div className={styles.state4} />
                              <div className={styles.label4}>NC</div>
                            </div>
                            <div className={styles.tngAnh}>Nguyễn Thị Cúc</div>
                          </div>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.dueDate}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>20/02/2022</div>
                          </div>
                          <div className={styles.tag}>
                            <div className={styles.div}>Mới được giao</div>
                          </div>
                          <div className={styles.works}>
                            <img
                              className={styles.userverAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>3</div>
                          </div>
                          <div className={styles.projectState}>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> đang xử lý</span>
                              </div>
                            </div>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> quá hạn</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.celldepartment}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.div}>Marketing</div>
                          </div>
                        </div>
                        <div className={styles.inputWrapper}>
                          <div className={styles.listItem3}>
                            <img
                              className={styles.uangleDownIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskTitle}>
                              <div className={styles.team}>
                                <img
                                  className={styles.frameChild}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.progressParent}>
                                  <img
                                    className={styles.usearchIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <img
                                    className={styles.downVectorIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.taskname}>
                                    Thiết kế giao diện Dashboard và Todo list
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tasknameParent}>
                                <div className={styles.taskname1}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                                <div className={styles.taskname3}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.assignees1}>
                              <div className={styles.avt5}>
                                <div className={styles.userpic4} />
                                <div className={styles.state4} />
                                <div className={styles.label4}>KA</div>
                              </div>
                              <div className={styles.tngAnh}>Tùng Anh</div>
                            </div>
                            <img
                              className={styles.priorityIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.dueDate}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>20/02/2022</div>
                            </div>
                            <div className={styles.tag1}>
                              <div className={styles.tagsdefault}>
                                <div className={styles.qlda}>E-Work</div>
                              </div>
                              <div className={styles.tagsdefault1}>
                                <div className={styles.qlda}>Lixil</div>
                              </div>
                              <div className={styles.tagsdefault2}>
                                <div className={styles.qlda}>Mobishop</div>
                              </div>
                            </div>
                            <div className={styles.works}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>3</div>
                            </div>
                            <div className={styles.projectState}>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> đang xử lý</span>
                                </div>
                              </div>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> quá hạn</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.action}>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.celldepartment}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.div}>Marketing</div>
                            </div>
                          </div>
                          <div className={styles.listItem4}>
                            <div className={styles.action2}>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueye.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openChiTitThnhVin1}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueditalt2.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openNotification1}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/utrash.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workList}>
                        <div className={styles.listItem2}>
                          <img
                            className={styles.uangleDownIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.taskTitle}>
                            <div className={styles.team}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.progressParent}>
                                <img
                                  className={styles.usearchIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <img
                                  className={styles.downVectorIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  Thiết kế giao diện Dashboard và Todo list
                                </div>
                              </div>
                            </div>
                            <div className={styles.tasknameParent}>
                              <div className={styles.taskname1}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                              <div className={styles.taskname3}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.assignees}>
                            <div className={styles.avt5}>
                              <div className={styles.userpic8} />
                              <div className={styles.state4} />
                              <div className={styles.label4}>NH</div>
                            </div>
                            <div className={styles.tngAnh}>Nguyễn Ngọc Hà</div>
                          </div>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.dueDate}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>20/02/2022</div>
                          </div>
                          <div className={styles.tag}>
                            <div className={styles.div}>Mới được giao</div>
                          </div>
                          <div className={styles.works}>
                            <img
                              className={styles.userverAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>3</div>
                          </div>
                          <div className={styles.projectState}>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> đang xử lý</span>
                              </div>
                            </div>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> quá hạn</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.celldepartment}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.div}>Marketing</div>
                          </div>
                        </div>
                        <div className={styles.inputWrapper}>
                          <div className={styles.listItem3}>
                            <img
                              className={styles.uangleDownIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskTitle}>
                              <div className={styles.team}>
                                <img
                                  className={styles.frameChild}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.progressParent}>
                                  <img
                                    className={styles.usearchIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <img
                                    className={styles.downVectorIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.taskname}>
                                    Thiết kế giao diện Dashboard và Todo list
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tasknameParent}>
                                <div className={styles.taskname1}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                                <div className={styles.taskname3}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.assignees1}>
                              <div className={styles.avt5}>
                                <div className={styles.userpic4} />
                                <div className={styles.state4} />
                                <div className={styles.label4}>KA</div>
                              </div>
                              <div className={styles.tngAnh}>Tùng Anh</div>
                            </div>
                            <img
                              className={styles.priorityIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.dueDate}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>20/02/2022</div>
                            </div>
                            <div className={styles.tag1}>
                              <div className={styles.tagsdefault}>
                                <div className={styles.qlda}>E-Work</div>
                              </div>
                              <div className={styles.tagsdefault1}>
                                <div className={styles.qlda}>Lixil</div>
                              </div>
                              <div className={styles.tagsdefault2}>
                                <div className={styles.qlda}>Mobishop</div>
                              </div>
                            </div>
                            <div className={styles.works}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>3</div>
                            </div>
                            <div className={styles.projectState}>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> đang xử lý</span>
                                </div>
                              </div>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> quá hạn</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.action}>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.celldepartment}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.div}>Marketing</div>
                            </div>
                          </div>
                          <div className={styles.listItem4}>
                            <div className={styles.action2}>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueye.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openChiTitThnhVin2}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueditalt2.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openNotification2}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/utrash.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workList3}>
                        <div className={styles.listItem2}>
                          <img
                            className={styles.uangleDownIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.taskTitle}>
                            <div className={styles.team}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.progressParent}>
                                <img
                                  className={styles.usearchIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <img
                                  className={styles.downVectorIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  Thiết kế giao diện Dashboard và Todo list
                                </div>
                              </div>
                            </div>
                            <div className={styles.tasknameParent}>
                              <div className={styles.taskname1}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                              <div className={styles.taskname3}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.assignees}>
                            <div className={styles.avt5}>
                              <div className={styles.userpic10} />
                              <div className={styles.state4} />
                              <div className={styles.label4}>HH</div>
                            </div>
                            <div className={styles.tngAnh}>
                              Hoàng Thị Mỹ Hạnh
                            </div>
                          </div>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.dueDate}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>20/02/2022</div>
                          </div>
                          <div className={styles.tag}>
                            <div className={styles.div}>Mới được giao</div>
                          </div>
                          <div className={styles.works}>
                            <img
                              className={styles.userverAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>3</div>
                          </div>
                          <div className={styles.projectState}>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> đang xử lý</span>
                              </div>
                            </div>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> quá hạn</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.celldepartment}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.div}>Marketing</div>
                          </div>
                        </div>
                        <div className={styles.inputWrapper}>
                          <div className={styles.listItem3}>
                            <img
                              className={styles.uangleDownIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskTitle}>
                              <div className={styles.team}>
                                <img
                                  className={styles.frameChild}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.progressParent}>
                                  <img
                                    className={styles.usearchIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <img
                                    className={styles.downVectorIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.taskname}>
                                    Thiết kế giao diện Dashboard và Todo list
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tasknameParent}>
                                <div className={styles.taskname1}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                                <div className={styles.taskname3}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.assignees1}>
                              <div className={styles.avt5}>
                                <div className={styles.userpic4} />
                                <div className={styles.state4} />
                                <div className={styles.label4}>KA</div>
                              </div>
                              <div className={styles.tngAnh}>Tùng Anh</div>
                            </div>
                            <img
                              className={styles.priorityIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.dueDate}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>20/02/2022</div>
                            </div>
                            <div className={styles.tag1}>
                              <div className={styles.tagsdefault}>
                                <div className={styles.qlda}>E-Work</div>
                              </div>
                              <div className={styles.tagsdefault1}>
                                <div className={styles.qlda}>Lixil</div>
                              </div>
                              <div className={styles.tagsdefault2}>
                                <div className={styles.qlda}>Mobishop</div>
                              </div>
                            </div>
                            <div className={styles.works}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>3</div>
                            </div>
                            <div className={styles.projectState}>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> đang xử lý</span>
                                </div>
                              </div>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> quá hạn</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.action}>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.celldepartment}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.div}>Marketing</div>
                            </div>
                          </div>
                          <div className={styles.listItem4}>
                            <div className={styles.action2}>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueye.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openChiTitThnhVin3}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueditalt2.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openNotification3}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/utrash.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workList4}>
                        <div className={styles.listItem2}>
                          <img
                            className={styles.uangleDownIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.taskTitle}>
                            <div className={styles.team}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.progressParent}>
                                <img
                                  className={styles.usearchIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <img
                                  className={styles.downVectorIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  Thiết kế giao diện Dashboard và Todo list
                                </div>
                              </div>
                            </div>
                            <div className={styles.tasknameParent}>
                              <div className={styles.taskname1}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                              <div className={styles.taskname3}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.assignees}>
                            <div className={styles.avt5}>
                              <div className={styles.userpic12} />
                              <div className={styles.state4} />
                              <div className={styles.label4}>BL</div>
                            </div>
                            <div className={styles.tngAnh}>Bùi Thúy Liên</div>
                          </div>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.dueDate}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>20/02/2022</div>
                          </div>
                          <div className={styles.tag}>
                            <div className={styles.div}>Mới được giao</div>
                          </div>
                          <div className={styles.works}>
                            <img
                              className={styles.userverAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>3</div>
                          </div>
                          <div className={styles.projectState}>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> đang xử lý</span>
                              </div>
                            </div>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> quá hạn</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.celldepartment}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.div}>Marketing</div>
                          </div>
                        </div>
                        <div className={styles.inputWrapper}>
                          <div className={styles.listItem3}>
                            <img
                              className={styles.uangleDownIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskTitle}>
                              <div className={styles.team}>
                                <img
                                  className={styles.frameChild}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.progressParent}>
                                  <img
                                    className={styles.usearchIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <img
                                    className={styles.downVectorIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.taskname}>
                                    Thiết kế giao diện Dashboard và Todo list
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tasknameParent}>
                                <div className={styles.taskname1}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                                <div className={styles.taskname3}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.assignees1}>
                              <div className={styles.avt5}>
                                <div className={styles.userpic4} />
                                <div className={styles.state4} />
                                <div className={styles.label4}>KA</div>
                              </div>
                              <div className={styles.tngAnh}>Tùng Anh</div>
                            </div>
                            <img
                              className={styles.priorityIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.dueDate}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>20/02/2022</div>
                            </div>
                            <div className={styles.tag1}>
                              <div className={styles.tagsdefault}>
                                <div className={styles.qlda}>E-Work</div>
                              </div>
                              <div className={styles.tagsdefault1}>
                                <div className={styles.qlda}>Lixil</div>
                              </div>
                              <div className={styles.tagsdefault2}>
                                <div className={styles.qlda}>Mobishop</div>
                              </div>
                            </div>
                            <div className={styles.works}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>3</div>
                            </div>
                            <div className={styles.projectState}>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> đang xử lý</span>
                                </div>
                              </div>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> quá hạn</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.action}>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.celldepartment}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.div}>Marketing</div>
                            </div>
                          </div>
                          <div className={styles.listItem4}>
                            <div className={styles.action2}>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueye.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openChiTitThnhVin4}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueditalt2.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openNotification4}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/utrash.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.uplusParent}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/uplus1.svg"
                      />
                      <div className={styles.seboStudio}>Thêm thành viên</div>
                    </div>
                  </div>
                  <div className={styles.pagination}>
                    <div className={styles.workflowyParent}>
                      <div className={styles.taskname}>Hiển thị</div>
                      <div className={styles.number}>
                        <div className={styles.taskname}>05</div>
                        <img
                          className={styles.userverAltIcon}
                          alt=""
                          src="/uangledown1.svg"
                        />
                      </div>
                      <div className={styles.taskname}>mục</div>
                    </div>
                    <div className={styles.pagination1}>
                      <div className={styles.fillArrowheadLeftParent}>
                        <img
                          className={styles.fillArrowheadLeft}
                          alt=""
                          src="/-fill--arrowheadleft.svg"
                        />
                        <div className={styles.dueDate18}>1</div>
                      </div>
                      <div className={styles.fillArrowheadLeftGroup}>
                        <img
                          className={styles.fillArrowheadLeft1}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.taskname}>1</div>
                      </div>
                      <div className={styles.fillArrowheadLeftGroup}>
                        <img
                          className={styles.fillArrowheadLeft1}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.taskname}>2</div>
                      </div>
                      <div className={styles.fillArrowheadLeftGroup}>
                        <img
                          className={styles.fillArrowheadLeft1}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.taskname}>3</div>
                      </div>
                      <div className={styles.fillArrowheadLeftGroup}>
                        <img
                          className={styles.fillArrowheadLeft1}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.taskname}>...</div>
                      </div>
                      <div className={styles.fillArrowheadLeftGroup}>
                        <img
                          className={styles.fillArrowheadLeft1}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.taskname}>10</div>
                      </div>
                      <div className={styles.fillArrowheadRightParent}>
                        <img
                          className={styles.fillArrowheadLeft}
                          alt=""
                          src="/-fill--arrowheadright.svg"
                        />
                        <div className={styles.dueDate18}>10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.departmentOverview}>
                <div className={styles.teamParent}>
                  <div className={styles.team}>
                    <img className={styles.downIcon} alt="" src="/down.svg" />
                    <div className={styles.workflowyParent}>
                      <img
                        className={styles.workflowyIcon}
                        alt=""
                        src="/workflowy.svg"
                      />
                      <div className={styles.headerParent}>
                        <div className={styles.seboStudio}>Nhóm Mobishop</div>
                        <div className={styles.seboStudio1}>
                          Phòng phát triển phần mềm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listItem}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.listItem1}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.departmentOverviewInner}>
                  <div className={styles.departmentProjectGroup}>
                    <div className={styles.departmentProject}>
                      <div className={styles.workList}>
                        <div className={styles.listItem2}>
                          <img
                            className={styles.uangleDownIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.taskTitle}>
                            <div className={styles.team}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.progressParent}>
                                <img
                                  className={styles.usearchIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <img
                                  className={styles.downVectorIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  Thiết kế giao diện Dashboard và Todo list
                                </div>
                              </div>
                            </div>
                            <div className={styles.tasknameParent}>
                              <div className={styles.taskname1}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                              <div className={styles.taskname3}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.assignees}>
                            <div className={styles.avt5}>
                              <div className={styles.userpic4} />
                              <div className={styles.state4} />
                              <div className={styles.label4}>TA</div>
                            </div>
                            <div className={styles.tngAnh}>Trịnh Tùng Anh</div>
                          </div>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.dueDate}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>20/02/2022</div>
                          </div>
                          <div className={styles.tag}>
                            <div className={styles.div}>Mới được giao</div>
                          </div>
                          <div className={styles.works}>
                            <img
                              className={styles.userverAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>3</div>
                          </div>
                          <div className={styles.projectState}>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> đang xử lý</span>
                              </div>
                            </div>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> quá hạn</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.celldepartment}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.div}>Marketing</div>
                          </div>
                        </div>
                        <div className={styles.inputWrapper}>
                          <div className={styles.listItem3}>
                            <img
                              className={styles.uangleDownIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskTitle}>
                              <div className={styles.team}>
                                <img
                                  className={styles.frameChild}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.progressParent}>
                                  <img
                                    className={styles.usearchIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <img
                                    className={styles.downVectorIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.taskname}>
                                    Thiết kế giao diện Dashboard và Todo list
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tasknameParent}>
                                <div className={styles.taskname1}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                                <div className={styles.taskname3}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.assignees1}>
                              <div className={styles.avt5}>
                                <div className={styles.userpic4} />
                                <div className={styles.state4} />
                                <div className={styles.label4}>KA</div>
                              </div>
                              <div className={styles.tngAnh}>Tùng Anh</div>
                            </div>
                            <img
                              className={styles.priorityIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.dueDate}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>20/02/2022</div>
                            </div>
                            <div className={styles.tag1}>
                              <div className={styles.tagsdefault}>
                                <div className={styles.qlda}>E-Work</div>
                              </div>
                              <div className={styles.tagsdefault1}>
                                <div className={styles.qlda}>Lixil</div>
                              </div>
                              <div className={styles.tagsdefault2}>
                                <div className={styles.qlda}>Mobishop</div>
                              </div>
                            </div>
                            <div className={styles.works}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>3</div>
                            </div>
                            <div className={styles.projectState}>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> đang xử lý</span>
                                </div>
                              </div>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> quá hạn</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.action}>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.celldepartment}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.div}>Marketing</div>
                            </div>
                          </div>
                          <div className={styles.listItem4}>
                            <div className={styles.action2}>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueye.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openChiTitThnhVin5}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueditalt2.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openNotification5}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/utrash.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workList}>
                        <div className={styles.listItem2}>
                          <img
                            className={styles.uangleDownIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.taskTitle}>
                            <div className={styles.team}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.progressParent}>
                                <img
                                  className={styles.usearchIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <img
                                  className={styles.downVectorIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  Thiết kế giao diện Dashboard và Todo list
                                </div>
                              </div>
                            </div>
                            <div className={styles.tasknameParent}>
                              <div className={styles.taskname1}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                              <div className={styles.taskname3}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.assignees}>
                            <div className={styles.avt5}>
                              <div className={styles.userpic12} />
                              <div className={styles.state4} />
                              <div className={styles.label4}>NA</div>
                            </div>
                            <div className={styles.tngAnh}>
                              Nguyễn Hoàng Anh
                            </div>
                          </div>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.dueDate}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>20/02/2022</div>
                          </div>
                          <div className={styles.tag}>
                            <div className={styles.div}>Mới được giao</div>
                          </div>
                          <div className={styles.works}>
                            <img
                              className={styles.userverAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>3</div>
                          </div>
                          <div className={styles.projectState}>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> đang xử lý</span>
                              </div>
                            </div>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> quá hạn</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.celldepartment}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.div}>Marketing</div>
                          </div>
                        </div>
                        <div className={styles.inputWrapper}>
                          <div className={styles.listItem3}>
                            <img
                              className={styles.uangleDownIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskTitle}>
                              <div className={styles.team}>
                                <img
                                  className={styles.frameChild}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.progressParent}>
                                  <img
                                    className={styles.usearchIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <img
                                    className={styles.downVectorIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.taskname}>
                                    Thiết kế giao diện Dashboard và Todo list
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tasknameParent}>
                                <div className={styles.taskname1}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                                <div className={styles.taskname3}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.assignees1}>
                              <div className={styles.avt5}>
                                <div className={styles.userpic4} />
                                <div className={styles.state4} />
                                <div className={styles.label4}>KA</div>
                              </div>
                              <div className={styles.tngAnh}>Tùng Anh</div>
                            </div>
                            <img
                              className={styles.priorityIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.dueDate}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>20/02/2022</div>
                            </div>
                            <div className={styles.tag1}>
                              <div className={styles.tagsdefault}>
                                <div className={styles.qlda}>E-Work</div>
                              </div>
                              <div className={styles.tagsdefault1}>
                                <div className={styles.qlda}>Lixil</div>
                              </div>
                              <div className={styles.tagsdefault2}>
                                <div className={styles.qlda}>Mobishop</div>
                              </div>
                            </div>
                            <div className={styles.works}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>3</div>
                            </div>
                            <div className={styles.projectState}>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> đang xử lý</span>
                                </div>
                              </div>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> quá hạn</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.action}>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.celldepartment}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.div}>Marketing</div>
                            </div>
                          </div>
                          <div className={styles.listItem4}>
                            <div className={styles.action2}>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueye.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openChiTitThnhVin6}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueditalt2.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openNotification6}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/utrash.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workList4}>
                        <div className={styles.listItem2}>
                          <img
                            className={styles.uangleDownIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.taskTitle}>
                            <div className={styles.team}>
                              <img
                                className={styles.frameChild}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.progressParent}>
                                <img
                                  className={styles.usearchIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <img
                                  className={styles.downVectorIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  Thiết kế giao diện Dashboard và Todo list
                                </div>
                              </div>
                            </div>
                            <div className={styles.tasknameParent}>
                              <div className={styles.taskname1}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                              <div className={styles.taskname3}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.tasknameWrapper}>
                                  <div className={styles.div}>3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.assignees}>
                            <div className={styles.avt5}>
                              <div className={styles.userpic8} />
                              <div className={styles.state4} />
                              <div className={styles.label4}>NT</div>
                            </div>
                            <div className={styles.tngAnh}>Nguyễn Minh Tú</div>
                          </div>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/uangledown.svg"
                          />
                          <div className={styles.dueDate}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>20/02/2022</div>
                          </div>
                          <div className={styles.tag}>
                            <div className={styles.div}>Mới được giao</div>
                          </div>
                          <div className={styles.works}>
                            <img
                              className={styles.userverAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskname}>3</div>
                          </div>
                          <div className={styles.projectState}>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> đang xử lý</span>
                              </div>
                            </div>
                            <div className={styles.team}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>
                                <span className={styles.span}>20</span>
                                <span> quá hạn</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                            <div className={styles.iconAction}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.celldepartment}>
                            <img
                              className={styles.ucalendarAltIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.div}>Marketing</div>
                          </div>
                        </div>
                        <div className={styles.inputWrapper}>
                          <div className={styles.listItem3}>
                            <img
                              className={styles.uangleDownIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.taskTitle}>
                              <div className={styles.team}>
                                <img
                                  className={styles.frameChild}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.progressParent}>
                                  <img
                                    className={styles.usearchIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <img
                                    className={styles.downVectorIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.taskname}>
                                    Thiết kế giao diện Dashboard và Todo list
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tasknameParent}>
                                <div className={styles.taskname1}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                                <div className={styles.taskname3}>
                                  <img
                                    className={styles.userverAltIcon}
                                    alt=""
                                    src="/uangledown.svg"
                                  />
                                  <div className={styles.tasknameWrapper}>
                                    <div className={styles.div}>3</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.assignees1}>
                              <div className={styles.avt5}>
                                <div className={styles.userpic4} />
                                <div className={styles.state4} />
                                <div className={styles.label4}>KA</div>
                              </div>
                              <div className={styles.tngAnh}>Tùng Anh</div>
                            </div>
                            <img
                              className={styles.priorityIcon}
                              alt=""
                              src="/uangledown.svg"
                            />
                            <div className={styles.dueDate}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>20/02/2022</div>
                            </div>
                            <div className={styles.tag1}>
                              <div className={styles.tagsdefault}>
                                <div className={styles.qlda}>E-Work</div>
                              </div>
                              <div className={styles.tagsdefault1}>
                                <div className={styles.qlda}>Lixil</div>
                              </div>
                              <div className={styles.tagsdefault2}>
                                <div className={styles.qlda}>Mobishop</div>
                              </div>
                            </div>
                            <div className={styles.works}>
                              <img
                                className={styles.userverAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.taskname}>3</div>
                            </div>
                            <div className={styles.projectState}>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> đang xử lý</span>
                                </div>
                              </div>
                              <div className={styles.team}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                                <div className={styles.taskname}>
                                  <span className={styles.span}>20</span>
                                  <span> quá hạn</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.action}>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.celldepartment}>
                              <img
                                className={styles.ucalendarAltIcon}
                                alt=""
                                src="/uangledown.svg"
                              />
                              <div className={styles.div}>Marketing</div>
                            </div>
                          </div>
                          <div className={styles.listItem4}>
                            <div className={styles.action2}>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction6}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/uangledown.svg"
                                />
                              </div>
                              <div className={styles.iconAction}>
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueye.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openChiTitThnhVin7}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/ueditalt2.svg"
                                />
                              </div>
                              <div
                                className={styles.iconAction9}
                                onClick={openNotification7}
                              >
                                <img
                                  className={styles.userverAltIcon}
                                  alt=""
                                  src="/utrash.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.uplusParent}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/uplus1.svg"
                      />
                      <div className={styles.seboStudio}>Thêm thành viên</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.teamParent}>
                <div className={styles.team}>
                  <img className={styles.downIcon} alt="" src="/down1.svg" />
                  <div className={styles.workflowyParent}>
                    <img
                      className={styles.workflowyIcon}
                      alt=""
                      src="/workflowy.svg"
                    />
                    <div className={styles.headerParent}>
                      <div className={styles.seboStudio}>
                        Nhóm Lixil Ecommerces
                      </div>
                      <div className={styles.seboStudio1}>
                        Phòng phát triển phần mềm
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.listItem}>
                  <div className={styles.checkBox}>
                    <div className={styles.checkBoxChild} />
                    <img
                      className={styles.checkBoxItem}
                      alt=""
                      src="/uangledown.svg"
                    />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.checkBox}>
                    <div className={styles.checkBoxChild} />
                    <img
                      className={styles.checkBoxItem}
                      alt=""
                      src="/uangledown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuMini}>
            <div className={styles.frameParent1}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div
                  className={styles.iconButton}
                  onClick={onIconButtonContainerClick}
                >
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ulistul.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ufilemedicalalt.svg"
                  />
                </div>
                <div className={styles.iconButton4}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usitemap.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/usetting.svg"
              />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-1.svg"
            />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.qunLHThngParent}>
                <div className={styles.overview}>Quản lý hệ thống</div>
                <div className={styles.mennuParent}>
                  <div className={styles.mennu} onClick={onMennuContainerClick}>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/ucodebranch.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Phòng ban</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uusersquare.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Thành viên</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div
                    className={styles.mennu2}
                    onClick={onMennuContainer2Click}
                  >
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uusersalt1.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Nhóm người dùng</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright1.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/ushieldcheck.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Phân quyền</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uslidersv.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Trường dữ liệu</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/mail.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Thông báo Email</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uimagev.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Hình nền</div>
                    </div>
                    <img
                      className={styles.ucodeBranchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isChiTitThnhVinOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitThnhVin}
        >
          <ChiTitThnhVin onClose={closeChiTitThnhVin} />
        </PortalPopup>
      )}
      {isNotificationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification}
        >
          <Notification1 onClose={closeNotification} />
        </PortalPopup>
      )}
      {isChiTitThnhVin1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitThnhVin1}
        >
          <ChiTitThnhVin onClose={closeChiTitThnhVin1} />
        </PortalPopup>
      )}
      {isNotification1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification1}
        >
          <Notification1 onClose={closeNotification1} />
        </PortalPopup>
      )}
      {isChiTitThnhVin2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitThnhVin2}
        >
          <ChiTitThnhVin onClose={closeChiTitThnhVin2} />
        </PortalPopup>
      )}
      {isNotification2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification2}
        >
          <Notification1 onClose={closeNotification2} />
        </PortalPopup>
      )}
      {isChiTitThnhVin3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitThnhVin3}
        >
          <ChiTitThnhVin onClose={closeChiTitThnhVin3} />
        </PortalPopup>
      )}
      {isNotification3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification3}
        >
          <Notification1 onClose={closeNotification3} />
        </PortalPopup>
      )}
      {isChiTitThnhVin4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitThnhVin4}
        >
          <ChiTitThnhVin onClose={closeChiTitThnhVin4} />
        </PortalPopup>
      )}
      {isNotification4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification4}
        >
          <Notification1 onClose={closeNotification4} />
        </PortalPopup>
      )}
      {isChiTitThnhVin5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitThnhVin5}
        >
          <ChiTitThnhVin onClose={closeChiTitThnhVin5} />
        </PortalPopup>
      )}
      {isNotification5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification5}
        >
          <Notification1 onClose={closeNotification5} />
        </PortalPopup>
      )}
      {isChiTitThnhVin6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitThnhVin6}
        >
          <ChiTitThnhVin onClose={closeChiTitThnhVin6} />
        </PortalPopup>
      )}
      {isNotification6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification6}
        >
          <Notification1 onClose={closeNotification6} />
        </PortalPopup>
      )}
      {isChiTitThnhVin7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitThnhVin7}
        >
          <ChiTitThnhVin onClose={closeChiTitThnhVin7} />
        </PortalPopup>
      )}
      {isNotification7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNotification7}
        >
          <Notification1 onClose={closeNotification7} />
        </PortalPopup>
      )}
    </>
  );
};

export default QunLHThngQunLNh;
