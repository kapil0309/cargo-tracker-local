import React, { useState } from 'react';
import CargoTable from './CargoTable';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { DataTableSkeleton, Pagination } from 'carbon-components-react';

const CARGO_QUERY = gql`
  query CARGO_QUERY {
    cargoItems {
      bookingId,
      bookingAmount,
      origin,
      destination,
      arrivaldeadline,
      transportStatus,
      routingStatus
    }
  }
`;

const headers = [
  {
    key: 'bookingId',
    header: 'Booking ID',
  },
  {
    key: 'bookingAmount',
    header: 'Booking Amount',
  },
  {
    key: 'origin',
    header: 'Origin',
  },
  {
    key: 'destination',
    header: 'Destination',
  },
  {
    key: 'arrivaldeadline',
    header: 'Arrival Deadline',
  },
  {
    key: 'routingStatus',
    header: 'Routing Status',
  },
];

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.bookingId,
    id: row.bookingId,
    bookingId: row.bookingId,
    bookingAmount: row.bookingAmount,
    origin: row.origin,
    destination: row.destination,
    arrivaldeadline: new Date(row.arrivaldeadline.slice(0, 10)).toLocaleDateString(),
    routingStatus: row.routingStatus,
    transportStatus: row.transportStatus,
  }));

const CargoPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <Query query={CARGO_QUERY}>
            {({ loading, error, data: { cargoItems } }) => {
              // Wait for the request to complete
              if (loading)
                return (
                  <DataTableSkeleton
                    columnCount={headers.length + 1}
                    rowCount={10}
                    headers={headers}
                  />
                );

              // Something went wrong with the data fetching
              if (error) return `Error! ${error.message}`;

              // If we're here, we've got our data!              
              const rows = getRowItems(cargoItems);
              setTotalItems(rows.length);

              return (
                <>
                  <CargoTable
                    headers={headers}
                    rows={rows.slice(
                      firstRowIndex,
                      firstRowIndex + currentPageSize
                    )}
                  />
                  <Pagination
                    totalItems={totalItems}
                    backwardText="Previous page"
                    forwardText="Next page"
                    pageSize={currentPageSize}
                    pageSizes={[5, 10, 15, 25]}
                    itemsPerPageText="Items per page"
                    onChange={({ page, pageSize }) => {
                      if (pageSize !== currentPageSize) {
                        setCurrentPageSize(pageSize);
                      }
                      setFirstRowIndex(pageSize * (page - 1));
                    }}
                  />
                </>
              );
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default CargoPage;
