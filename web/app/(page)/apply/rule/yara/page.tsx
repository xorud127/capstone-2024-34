"use client";

import YaraRulePreviewCard from "@components/apply/rule-yara-preview-card";
import SelectYaraRuleCard from "@components/apply/rule-yara-select-card";
import ApplyRuleFilesPEUploadCard from "@components/apply/rule_yara_upload_pe_card";

import { GenYaraRulePeFilesUploadResponse } from "@customTypes/generate/api";
import { YaraRuleDB } from "@customTypes/yara/db";
import Link from "next/link";
import { useState } from "react";

export default function AnalyzePeFilesPage() {
  let [data, setData] = useState<GenYaraRulePeFilesUploadResponse>();
  // 업로드후 로딩 상태 저장
  const [isProgress, setIsProgress] = useState(false);
  // STEP1 선택한 Yara Rule 스트링 데이터 저장
  const [selectedYaraRule, setSelectedYaraRule] = useState<YaraRuleDB>();

  function handleSubmitResponse(
    responseData: GenYaraRulePeFilesUploadResponse,
  ) {
    setData(responseData);
    console.log("res", data);
  }

  return (
    <div className="overflow-x- h-full w-full max-w-full space-y-4 px-4 py-4 sm:space-y-6 sm:px-6 sm:py-6">
      <div className="h-full min-h-full w-full">
        {/* 페이지 헤더 */}
        <div className="grid grid-cols-2">
          <header>
            <p className="mb-2 text-sm font-semibold text-blue-600">
              Apply Yara Rule
            </p>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
              Yara Rule 적용
            </h1>
            <p className="mt-2 text-lg text-gray-800"></p>
          </header>

          <div className="place-items-end items-end place-self-end"></div>
        </div>
        {/* 콘텐츠 영역 */}
        <div className="mt-5 grid w-full max-w-full gap-4 sm:gap-6">
          <div>
            <div data-hs-stepper="">
              <ul className="relative flex flex-row gap-x-2">
                <li
                  className="group flex flex-1 shrink basis-0 items-center gap-x-2"
                  data-hs-stepper-nav-item='{"index": 1}'
                >
                  <span className="group inline-flex min-h-7 min-w-7 items-center align-middle text-xs">
                    <span className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                      <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                        1
                      </span>
                      <svg
                        className="hidden size-3 flex-shrink-0 hs-stepper-success:block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="ms-2 text-sm font-medium text-gray-800">
                      Yara Rule 선택
                    </span>
                  </span>
                  <div className="h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
                </li>

                <li
                  className="group flex flex-1 shrink basis-0 items-center gap-x-2"
                  data-hs-stepper-nav-item='{"index": 2}'
                >
                  <span className="group inline-flex min-h-7 min-w-7 items-center align-middle text-xs">
                    <span className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                      <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                        2
                      </span>
                      <svg
                        className="hidden size-3 flex-shrink-0 hs-stepper-success:block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="ms-2 text-sm font-medium text-gray-800">
                      비교 대상 파일 업로드
                    </span>
                  </span>
                  <div className="h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
                </li>

                <li
                  className="group flex flex-1 shrink basis-0 items-center gap-x-2"
                  data-hs-stepper-nav-item='{"index": 3}'
                >
                  <span className="group inline-flex min-h-7 min-w-7 items-center align-middle text-xs">
                    <span className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                      <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                        3
                      </span>
                      <svg
                        className="hidden size-3 flex-shrink-0 hs-stepper-success:block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="ms-2 text-sm font-medium text-gray-800">
                      결과 확인
                    </span>
                  </span>
                  <div className="h-px w-full flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
                </li>
              </ul>

              <div className="mt-5 sm:mt-8">
                <div data-hs-stepper-content-item='{"index": 1}'>
                  <div className="grid min-h-96 w-full max-w-full gap-4 rounded-xl sm:gap-6 xl:grid-cols-3">
                    <div className="h-full">
                      <SelectYaraRuleCard
                        selectedYaraRule={selectedYaraRule}
                        setSelectedYaraRule={setSelectedYaraRule}
                      />
                    </div>
                    <div className="h-full xl:col-span-2">
                      <YaraRulePreviewCard
                        success={true}
                        message={"undefined"}
                        data_yara={selectedYaraRule}
                        isProgress={false}
                      />
                    </div>
                  </div>
                </div>

                <div
                  data-hs-stepper-content-item='{"index": 2}'
                  style={{ display: "none" }}
                >
                  <div className="grid w-full max-w-full gap-4 rounded-xl sm:gap-6">
                    <ApplyRuleFilesPEUploadCard
                      onSubmit={function (
                        data: GenYaraRulePeFilesUploadResponse,
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                      isProgress={false}
                      setIsProgress={function (isProgress: boolean): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  </div>
                </div>

                <div
                  data-hs-stepper-content-item='{"index": 3}'
                  style={{ display: "none" }}
                >
                  <div className="flex items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-gray-500">Third content</h3>
                  </div>
                </div>

                <div
                  data-hs-stepper-content-item='{"isFinal": true}'
                  style={{ display: "none" }}
                >
                  <div className="flex items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-gray-500">Final content</h3>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
                    data-hs-stepper-back-btn=""
                  >
                    <svg
                      className="size-4 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    이전
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                    data-hs-stepper-next-btn=""
                  >
                    다음
                    <svg
                      className="size-4 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                    data-hs-stepper-finish-btn=""
                    style={{ display: "none" }}
                  >
                    완료
                  </button>
                  <button
                    type="reset"
                    className="inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                    data-hs-stepper-reset-btn=""
                    style={{ display: "none" }}
                  >
                    초기화
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* {data?.success === true ? (
            <div className="bg-neutral-200 p-4">
              <p>정상 업로드 성공</p>
              <p>{JSON.stringify(data?.data_yara)}</p>
              <p>{data?.data_uploader?.folderPath}</p>
              <p>{JSON.stringify(data?.data_uploader?.files)}</p>
            </div>
          ) : (
            <></>
          )} */}
        </div>
      </div>
    </div>
  );
}
